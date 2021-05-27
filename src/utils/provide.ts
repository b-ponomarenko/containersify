import { Provider } from '../types/provider';
import { createToken, TokenType } from '../createToken';

export const provide = <
    Deps extends ReadonlyArray<any> = ReadonlyArray<Provider['deps']>,
    Token extends ReturnType<typeof createToken> = Provider['provider']
>(provider: Provider<Deps, Token>) => {
    return provider;
}
