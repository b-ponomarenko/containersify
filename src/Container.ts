import {CreatedToken, InferArgument, Provider} from "./types/provider";
import { createToken, TokenMulti, TokenOptional, TokenType} from "./createToken";
import { NormalizedDependency, NormalizedProvider, normalizeProvider } from './utils/normalizeProvider';
import { Scope } from './consts/scope';

export const CONTAINER_TOKEN = createToken<Container>('CONTAINER_TOKEN');

type TokenSettings<Token, Optional extends boolean = TokenOptional<Token>> = { optional: Optional };

const CIRCULAR_MARKER = '__CIRCULAR_MARKER__';

export class Container {
  registrations = new Map<CreatedToken, any>();
  resolvedProviders = new Map<NormalizedProvider<any, any>, any>();

  constructor(providers: Provider<CreatedToken, any>[] = []) {
      [
          ...providers,
        { provide: CONTAINER_TOKEN, useValue: this },
      ]
          .forEach(provider => this.register(provider));
  }

  get<
    Token extends CreatedToken,
    Optional extends boolean = TokenOptional<Token>,
  >(
      token: Token,
      options: TokenSettings<Token, Optional> = { optional: token.getOptions().optional as Optional }
  ): InferArgument<TokenType<Token>, TokenMulti<Token>, Optional> {
    const { optional } = options;
    const provider: NormalizedProvider<Token, any[]> = this.registrations.get(token);

    type ReturnValue = InferArgument<TokenType<Token>, TokenMulti<Token>, Optional>;

    if (!provider) {
      if (optional) {
        return null as ReturnValue;
      }

      throw new Error(`There is no provider for token "${token}"`);
    }

    if (Array.isArray(provider)) {
      return provider.map(p => this.resolve(p, optional)) as ReturnValue;
    }

    return this.resolve(provider, optional) as ReturnValue;
  }

  // getDepsOf<Token extends CreatedToken>(token: Token) {
  //   const provider: NormalizedProvider<Token, any[]> = this.registrations.get(token);
  //
  //   if (!provider) {
  //     throw new Error(`There is no provider for token "${token}"`);
  //   }
  // }

  private resolve<Token extends CreatedToken, Optional extends boolean>
    (provider: NormalizedProvider<Token, NormalizedDependency<CreatedToken, boolean>[]>, optional: Optional): TokenType<Token> {
    const { scope, factory, deps } = provider;

    if (scope === Scope.TRANSIENT) {
       return factory(
           deps.map(({ token, optional }) => this.get(token, { optional }))
       );
    }

    return this.resolveWithCache(provider, optional);
  }

  private resolveWithCache<Token extends CreatedToken, Optional extends boolean>
    (provider: NormalizedProvider<Token, NormalizedDependency<CreatedToken, boolean>[]>, optional: Optional): TokenType<Token> {
    const { factory, deps } = provider;
    const resolvedValue = this.resolvedProviders.get(provider);

    if (resolvedValue && resolvedValue !== CIRCULAR_MARKER) {
      return resolvedValue;
    }

    if (resolvedValue === CIRCULAR_MARKER) {
      throw new Error('Circular dependency found between'); // Тут нужен контекст выполнения. Пример Error: Circular dependency found: Ninja -> A -> B -> C -> D -> A
    }

    const resolvedDeps = deps.map(({ token, optional }) => this.get(token, { optional }));
    const value = factory(...resolvedDeps);

    this.resolvedProviders.set(provider, value);

    return value;
  }

  register<Token extends CreatedToken, Deps extends any[] = []>(provider: Provider<Token, Deps>): void {
    const normalizedProvider = normalizeProvider(provider);

    const { provide, multi } = normalizedProvider;

    // TODO check that provide is a token

    const tokenOptions = provide.getOptions();
    const alreadyRegisteredProviders = this.registrations.get(provide);

    if (tokenOptions.multi !== multi) {
      throw new Error(`Token "${provide}" was declared with multi=${tokenOptions.multi}, but for current provider multi=${multi}`);
    }

    if (alreadyRegisteredProviders) {
      if (multi) {
        this.registrations.set(provide, [...alreadyRegisteredProviders, normalizedProvider]);
        return;
      }
    }

    if (multi) {
      this.registrations.set(provide, [normalizedProvider]);
      return;
    }

    this.registrations.set(provide, normalizedProvider);
  }
}
