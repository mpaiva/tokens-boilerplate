import { tokens } from '../generated/tokens';

export const useToken = (tokenName: keyof typeof tokens) => {
  return `var(--${tokenName})`;
};