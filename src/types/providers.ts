import { CreatedToken, Provider } from "./provider";

export type Providers<
  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24,
  D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D13, D14, D15, D16, D17, D18, D19, D20, D21, D22, D23, D24
> =
  [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>, Provider<T20, D20>, Provider<T21, D21>, Provider<T22, D22>, Provider<T23, D23>, Provider<T24, D24>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>, Provider<T20, D20>, Provider<T21, D21>, Provider<T22, D22>, Provider<T23, D23>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>, Provider<T20, D20>, Provider<T21, D21>, Provider<T22, D22>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>, Provider<T20, D20>, Provider<T21, D21>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>, Provider<T20, D20>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>, Provider<T19, D19>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>, Provider<T18, D18>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>, Provider<T17, D17>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>, Provider<T16, D16>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>, Provider<T15, D15>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>, Provider<T14, D14>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>, Provider<T13, D13>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>, Provider<T12, D12>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>, Provider<T11, D11>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>, Provider<T10, D10>]
  : [T1, T2, T3, T4, T5, T6, T7, T8, T9] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>, Provider<T9, D9>]
  : [T1, T2, T3, T4, T5, T6, T7, T8] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>, Provider<T8, D8>]
  : [T1, T2, T3, T4, T5, T6, T7] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>, Provider<T7, D7>]
  : [T1, T2, T3, T4, T5, T6] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>, Provider<T6, D6>]
  : [T1, T2, T3, T4, T5] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>, Provider<T5, D5>]
  : [T1, T2, T3, T4] extends [CreatedToken, CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>, Provider<T4, D4>]
  : [T1, T2, T3] extends [CreatedToken, CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>, Provider<T3, D3>]
  : [T1, T2] extends [CreatedToken, CreatedToken] ? [Provider<T1, D1>, Provider<T2, D2>]
  : [T1] extends [CreatedToken] ? [Provider<T1, D1>] : never[];
