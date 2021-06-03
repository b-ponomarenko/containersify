import {CreatedToken, InferArgument, Provider} from "./types/provider";
import {createToken, TokenMulti, TokenOptional, TokenType} from "./createToken";

export const CONTAINER_TOKEN = createToken<Container>('CONTAINER_TOKEN');

type TokenObject<Token, Multi = false, Optional = false> = { token: Token, multi?: Multi; optional?: Optional };

export class Container {
  constructor(providers?: Provider<any, any>[]) {}

  get<Token extends CreatedToken>(token: Token):
    InferArgument<TokenType<Token>, TokenMulti<Token>, TokenOptional<Token>>;
  get<
    Token extends CreatedToken,
    Multi extends boolean = false,
    Optional extends boolean = false,
  >({ token, multi, optional }: TokenObject<Token, Multi, Optional>):
    InferArgument<TokenType<Token>, Multi, Optional>;
  get<
    Token extends CreatedToken,
    Multi extends boolean,
    Optional extends boolean,
  >(payload: Token | TokenObject<Token, Multi, Optional>) {
    return (payload);
  }

  register<Token extends CreatedToken, Deps extends ReadonlyArray<any>>(provider: Provider<Token, Deps>) {

  }
}
