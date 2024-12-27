import React from 'react';
import { Container } from './components/layout/Container';
import { colors, typography, spacing, effects } from './tokens';
import { TokenSection } from './components/docs/TokenSection';
import { ColorToken } from './components/docs/ColorToken';
import { TypographyToken } from './components/docs/TypographyToken';
import { SpacingToken } from './components/docs/SpacingToken';
import { EffectToken } from './components/docs/EffectToken';

function App() {
  return (
    <Container>
      <div className="min-h-screen py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Design Token Documentation</h1>
          <p className="text-lg text-gray-600">
            A comprehensive guide to our design system tokens
          </p>
          <nav className="mt-8">
            <ul className="flex flex-wrap gap-4">
              {['Colors', 'Typography', 'Spacing', 'Effects'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="space-y-12">
          <TokenSection 
            title="Colors" 
            description="Our color system is designed to be accessible and consistent across all platforms."
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Theme - Light Primary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {Object.entries(colors.theme.light.primary).map(([key, value]) => (
                    <ColorToken 
                      key={key}
                      name={key}
                      value={value}
                      category="Primary"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Core - Neutral</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {Object.entries(colors.core.neutral).map(([key, value]) => (
                    <ColorToken 
                      key={key}
                      name={key}
                      value={value}
                      category="Neutral"
                    />
                  ))}
                </div>
              </div>
            </div>
          </TokenSection>

          <TokenSection 
            title="Typography" 
            description="Typography tokens define our type scale and weights."
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Font Sizes</h3>
                <div className="space-y-2">
                  {Object.entries(typography.fontSize).map(([key, value]) => (
                    <TypographyToken 
                      key={key}
                      name={key}
                      value={value}
                      type="size"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Font Weights</h3>
                <div className="space-y-2">
                  {Object.entries(typography.fontWeight).map(([key, value]) => (
                    <TypographyToken 
                      key={key}
                      name={key}
                      value={value}
                      type="weight"
                    />
                  ))}
                </div>
              </div>
            </div>
          </TokenSection>

          <TokenSection 
            title="Spacing" 
            description="Consistent spacing helps create visual hierarchy and rhythm."
          >
            <div className="space-y-2">
              {Object.entries(spacing).map(([key, value]) => (
                <SpacingToken 
                  key={key}
                  name={key}
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
              {Object.entries(effects.shadow).map(([key, value]) => (
                <EffectToken 
                  key={key}
                  name={key}
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