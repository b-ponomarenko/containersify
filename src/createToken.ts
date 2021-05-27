class Token<
    TokenType,
    Multi extends boolean,
    Optional extends boolean
> {
    constructor(
        private tokenName: string,
        private multi: Multi,
        private optional: Optional,
    ) {}

    toString() {
        return this.tokenName;
    }

    getOptions() {
        return { multi: this.multi, optional: this.optional };
    }
}

type Options<
    Multi extends boolean,
    Optional extends boolean
> = {
    multi?: Multi;
    optional?: Optional
}

export type TokenType<T> = TokenMetadata<T>['type'];
export type IsTokenMulti<T> = TokenMetadata<T>['multi'];
export type IsTokenOptional<T> = TokenMetadata<T>['multi'];

export type TokenMetadata<T> =
    T extends Token<infer Type, infer Multi, infer Optional> ? { type: Type; multi: Multi; optional: Optional } : never;


export function createToken<
    TokenType = any,
    Multi extends boolean = false,
    Optional extends boolean = false
    >
(tokenName: string, options?: Options<Multi, Optional>): Token<TokenType, Multi, Optional>;
export function createToken<
    TokenType = any,
    Multi extends boolean = true,
    Optional extends boolean = false
    >
(tokenName: string, options?: Options<Multi, Optional>): Token<TokenType, Multi, Optional>;
export function createToken<
    TokenType = any,
    Multi extends boolean = false,
    Optional extends boolean = true
    >
(tokenName: string, options?: Options<Multi, Optional>): Token<TokenType, Multi, Optional>;
export function createToken<
    TokenType = any,
    Multi extends boolean = true,
    Optional extends boolean = true
>
(tokenName: string, options?: Options<Multi, Optional>): Token<TokenType, Multi, Optional>;
export function createToken <
    TokenType = any,
    Multi extends boolean = false,
    Optional extends boolean = false
>
    (
        tokenName: string,
        { multi = false as Multi, optional = false as Optional }: Options<Multi, Optional> = { multi: false, optional: false } as Options<Multi, Optional>
    ) {

    return new Token<TokenType, Multi, Optional>(tokenName, multi, optional);
}

