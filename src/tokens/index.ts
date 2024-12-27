export * from './colors';
export * from './typography';
export * from './spacing';
export * from './effects';

// Common token types
export type TokenValue = string | number;
export type TokenGroup = Record<string, TokenValue | TokenGroup>;

// Type-safe token getters
export const getToken = <T extends TokenGroup>(
  group: T,
  path: string
): TokenValue | undefined => {
  return path.split('.').reduce((obj, key) => obj?.[key], group as any);
};

// Example usage:
// const color = getToken(colors, 'theme.light.primary.500');