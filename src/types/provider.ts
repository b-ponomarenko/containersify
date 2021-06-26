import {createToken, TokenMulti, TokenOptional, TokenType} from '../createToken';
import {Scope} from "../consts/scope";

export type CreatedToken = ReturnType<typeof createToken>;

type ProviderReturnType<T> = TokenType<T>;
type InferOptional<Token, Optional> = Optional extends true ? Token | null : Token;
type InferMulti<Token, Multi> = Multi extends true ? Token[] : Token;

export type InferArgument<Token, Multi, Optional> = InferOptional<InferMulti<Token, Multi>, Optional>;

export type Arguments<Deps> = Deps extends ReadonlyArray<any>
    ? {
        [Dependency in keyof Deps]:
            Deps[Dependency] extends { token: infer Token, optional?: infer Optional } ?
          InferArgument<TokenType<Token>, TokenMulti<Token>, Optional>
              : Deps[Dependency] extends CreatedToken ? InferArgument<TokenType<Deps[Dependency]>, TokenMulti<Deps[Dependency]>, TokenOptional<Deps[Dependency]>>
          : []
    }
    : [];

type ScopeValues<Scopes> = Scopes extends { readonly [key in keyof Scopes]: infer T } ? T : never;

export type Scopes = ScopeValues<Scope>;

export type Factory<Token, Deps extends any> = (...args: Arguments<Deps>) => ProviderReturnType<Token>;

export type ValueProvider<Token> = {
    provide: Token;
    useValue: TokenType<Token>;
    multi?: boolean;
};

export type FactoryProvider<
    Token,
    Deps extends any = [],
> = {
    provide: Token;
    useFactory: Factory<Token, Deps>,
    scope?: Scopes,
    deps?: Deps,
    multi?: boolean;
}

export type ClassProvider<
    Deps extends any,
    Token
> = {
    provide: Token;
    useClass: {
        new (
            ...args: Arguments<Deps>
        ): ProviderReturnType<Token>
    },
    scope?: Scopes,
    deps?: Deps,
    multi?: boolean;
}


export type Provider<
    Token,
    Deps,
> =
    | ValueProvider<Token>
    | FactoryProvider<Token, Deps>
    | ClassProvider<Deps, Token>;
