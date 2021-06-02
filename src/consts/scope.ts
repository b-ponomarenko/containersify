export const Scope = {
  SINGLETON: 'SINGLETON',
  REQUEST: 'REQUEST',
  TRANSIENT: 'TRANSIENT'
} as const;

export type Scope = typeof Scope;
