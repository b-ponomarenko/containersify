import { CreatedToken, Factory, Provider, Scopes } from '../types/provider';
import { Token, TokenOptional, TokenType } from '../createToken';

export type NormalizedDependency<Token, Optional = false> = { token: Token, optional: Optional };

type NormalizedDeps<Deps extends any[]> = [Deps] extends [never] ? []
    : {
    [Dependency in keyof Deps]: Deps[Dependency] extends { token: infer Token, optional?: infer Optional } ?
            NormalizedDependency<Token, Optional>
        : Deps[Dependency] extends CreatedToken ?
            NormalizedDependency<TokenType<Deps[Dependency]>, TokenOptional<Deps[Dependency]>>
            : never
};

export type NormalizedProvider<Token extends CreatedToken, Deps extends any[]> = {
    provide: Token;
    factory: Factory<Token, Deps>;
    multi: boolean;
    scope: Scopes;
    deps: NormalizedDeps<Deps>;
};

const normalizeDeps = <
    Deps extends any[] = []
>(deps: Deps): NormalizedDeps<Deps> => {
    if (!deps) {
        return [] as NormalizedDeps<Deps>;
    }

    return deps.map(dependency => {
        if (dependency instanceof Token) {
            const { optional } = dependency.getOptions();

            return { token: dependency, optional };
        }

        const { token, optional = false } = dependency;

        return { token, optional };
    }) as NormalizedDeps<Deps>;
}

export const normalizeProvider = <Token extends CreatedToken, Deps extends any[] = []>
    (provider: Provider<Token, Deps>): NormalizedProvider<Token, Deps> => {
    const { provide, multi = provide.getOptions().multi } = provider;

    // TODO validate provider;

    if ('useValue' in provider) {
        return {
            provide,
            multi,
            scope: 'SINGLETON',
            deps: normalizeDeps(([] as unknown) as Deps),
            factory: () => provider.useValue,
        };
    }

    const { deps = ([] as unknown) as Deps, scope = 'SINGLETON' } = provider;

    if ('useFactory' in provider) {
        return {
            provide,
            scope,
            multi,
            deps: normalizeDeps(deps),
            factory: (...deps) => provider.useFactory(...deps),
        };
    }

    if ('useClass' in provider) {
        return {
            provide,
            scope,
            multi,
            deps: normalizeDeps(deps),
            factory: (...deps) => new provider.useClass(...deps),
        };
    }

    throw new Error(`Unknown provider type. You pass ${provider}`);
}
