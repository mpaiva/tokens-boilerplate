import { tokens } from '../generated/tokens';

export type TokenName = keyof typeof tokens;

export const useDesignToken = (tokenName: TokenName) => {
  return `var(--${tokenName})`;
}; 