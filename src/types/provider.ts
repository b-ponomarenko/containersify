import { createToken, TokenType } from '../createToken';

export type ValueProvider = {
    provider: ReturnType<typeof createToken>;
    useValue: any;
};

export type FactoryProvider<
    Deps extends ReadonlyArray<any>,
    Token extends ReturnType<typeof createToken>
> = {
    provider: Token;
    useFactory: (
        ...args: { [idx in keyof Deps]: TokenType<Deps[idx]> }
    ) => TokenType<Token>,
    deps: Deps,
    multi?: boolean;
}

export type ClassProvider<
    Deps extends ReadonlyArray<any>,
    Token extends ReturnType<typeof createToken>
> = {
    provider: Token;
    useClass: {
        new (
            ...args: { [idx in keyof Deps]: TokenType<Deps[idx]> }
        ): TokenType<Token>
    },
    deps: Deps,
    multi?: boolean;
}


// TODO Разобраться с deps для ValueProvider
export type Provider<
    Deps extends ReadonlyArray<any> = [],
    Token extends ReturnType<typeof createToken> = any
> = FactoryProvider<Deps, Token> | ClassProvider<Deps, Token>;
