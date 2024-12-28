import React from 'react';
import { Container } from './components/layout/Container';
import { TokenSection } from './components/docs/TokenSection';
import { ColorToken } from './components/docs/ColorToken';
import { TypographyToken } from './components/docs/TypographyToken';
import { SpacingToken } from './components/docs/SpacingToken';
import { EffectToken } from './components/docs/EffectToken';
import { useDesignToken } from './hooks/useDesignToken';
import { tokens } from './generated/tokens';

function App() {
  // Group tokens by category using the new kebab-case format
  const colorTokens = Object.entries(tokens).filter(([name]) => name.startsWith('color-'));
  const typographyTokens = Object.entries(tokens).filter(([name]) => name.startsWith('typography-'));
  const spacingTokens = Object.entries(tokens).filter(([name]) => name.startsWith('size-spacing-'));
  const effectTokens = Object.entries(tokens).filter(([name]) => name.startsWith('effect-'));

  return (
    <Container>
      <div className="min-h-screen py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Design Token Documentation</h1>
          <p 
            className="text-lg"
            style={{ color: useDesignToken('color-core-neutral-600') }}
          >
            A comprehensive guide to our design system tokens
          </p>
        </header>

        <main className="space-y-12">
          <TokenSection 
            title="Colors" 
            description="Our color system is designed to be accessible and consistent across all platforms."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {colorTokens.map(([name, value]) => (
                <ColorToken 
                  key={name}
                  name={name}
                  value={value}
                />
              ))}
            </div>
          </TokenSection>

          <TokenSection 
            title="Typography" 
            description="Typography tokens define our type scale and weights."
          >
            <div className="space-y-4">
              {typographyTokens.map(([name, value]) => (
                <TypographyToken 
                  key={name}
                  name={name}
                  value={value}
                />
              ))}
            </div>
          </TokenSection>

          <TokenSection 
            title="Spacing" 
            description="Consistent spacing helps create visual hierarchy and rhythm."
          >
            <div className="space-y-4">
              {spacingTokens.map(([name, value]) => (
                <SpacingToken 
                  key={name}
                  name={name}
                  value={value}
                />
              ))}
            </div>
          </TokenSection>

          <TokenSection 
            title="Effects" 
            description="Effects like shadows help create depth and elevation in the interface."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {effectTokens.map(([name, value]) => (
                <EffectToken 
                  key={name}
                  name={name}
                  value={value}
                />
              ))}
            </div>
          </TokenSection>
        </main>
      </div>
    </Container>
  );
}

export default App;