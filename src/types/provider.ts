import {createToken, TokenMulti, TokenOptional, TokenType} from '../createToken';
import {Scope} from "../consts/scope";

export type CreatedToken = ReturnType<typeof createToken>;

type ProviderReturnType<T> = T extends CreatedToken ? TokenType<T> : any;
type InferOptional<Token, Optional> = Optional extends true ? Token | null : Token;
type InferMulti<Token, Multi> = Multi extends true ? Token[] : Token;

export type InferArgument<Token, Multi, Optional> = InferOptional<InferMulti<Token, Multi>, Optional>;

type Arguments<Deps> = Deps extends ReadonlyArray<any>
    ? {
        [Dependency in keyof Deps]:
            Deps[Dependency] extends { token: infer Token, optional?: infer Optional, multi?: infer Multi } ?
          InferArgument<TokenType<Token>, Multi, Optional>
              : Deps[Dependency] extends CreatedToken ? InferArgument<TokenType<Deps[Dependency]>, TokenMulti<Deps[Dependency]>, TokenOptional<Deps[Dependency]>>
          : never
    }
    : [];

type ScopeValues<Scopes> = Scopes extends { readonly [key in keyof Scopes]: infer T } ? T : never;

export type ValueProvider<Token> = {
    provide: Token;
    useValue: ProviderReturnType<Token>;
    multi?: boolean;
};

export type FactoryProvider<
    Deps extends any,
    Token
> = {
    provide: Token;
    useFactory: (...args: Arguments<Deps>) => ProviderReturnType<Token>,
    scope?: ScopeValues<Scope>,
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
    scope?: ScopeValues<Scope>,
    deps?: Deps,
    multi?: boolean;
}


export type Provider<
    Token,
    Deps,
> =
    | ValueProvider<Token>
    | FactoryProvider<Deps, Token>
    | ClassProvider<Deps, Token>;
