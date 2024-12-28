# Design Token Boilerplate

A starter template for building a design token system using Style Dictionary. This boilerplate provides a foundation for managing design tokens as a single source of truth for colors, typography, spacing, and effects.

## Features

- 🎨 Pre-configured token structure for colors, typography, spacing, and effects
- 🔄 Style Dictionary setup with custom transforms and formats
- 📦 Generated CSS variables and TypeScript types
- ⚛️ React hooks for easy token usage
- 📝 Built-in documentation components
- 🎯 TypeScript support

## Quick Start

1. Clone this repository:
```bash
git clone https://github.com/your-username/design-token-boilerplate.git
cd design-token-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Build tokens:
```bash
npm run tokens:build
```

4. Start the development server:
```bash
npm run dev
```

## Style Dictionary Configuration

The Style Dictionary configuration (`tokens/config.cjs`) includes:

### Custom Transforms

1. **Name Transform** - Handles token naming conventions:
```javascript
StyleDictionary.registerTransform({
  name: 'name/kebab',
  type: 'name',
  transformer: (token) => {
    // Converts token paths to kebab-case
    // Example: color.primary.500 → color-primary-500
    const sanitizedPath = token.path.map(part => 
      String(part).replace('.', '-')
    );
    return sanitizedPath.join('-').toLowerCase();
  }
});
```

2. **Value Transform** - Handles token references:
```javascript
StyleDictionary.registerTransform({
  name: 'value/reference',
  type: 'value',
  matcher: (token) => typeof token.value === 'string' && token.value.includes('{'),
  transformer: (token, dictionary) => {
    // Resolves token references like {color.primary.500}
    const references = token.value.match(/\{([^}]+)\}/g) || [];
    let value = token.value;
    references.forEach((ref) => {
      const path = ref.replace(/[{}]/g, '').split('.');
      const refToken = dictionary.tokens[path[0]][path[1]][path[2]];
      value = value.replace(ref, refToken.value);
    });
    return value;
  }
});
```

### Output Formats

1. **CSS Variables**:
   - Generated in `src/styles/tokens.css`
   - Example output:
```css
:root {
  --color-core-brand-primary-500: #0ea5e9;
  --typography-fontsize-base: 1rem;
}
```

2. **TypeScript Types**:
   - Generated in `src/generated/tokens.ts`
   - Example output:
```typescript
export const tokens = {
  'color-core-brand-primary-500': '#0ea5e9',
  'typography-fontsize-base': '1rem'
} as const;
```

## Project Structure

```
├── tokens/
│   ├── src/
│   │   ├── global/           # Global token definitions
│   │   │   ├── brand.json    # Brand colors
│   │   │   ├── typography.json
│   │   │   ├── size.json     # Spacing & sizing
│   │   │   └── effects.json  # Shadows & effects
│   │   └── components/       # Component-specific tokens
│   └── config.cjs           # Style Dictionary configuration
├── src/
│   ├── generated/          # Generated token files
│   │   └── tokens.ts      # TypeScript definitions
│   ├── styles/
│   │   └── tokens.css     # Generated CSS variables
│   ├── hooks/
│   │   └── useDesignToken.ts
│   └── components/
       └── docs/          # Token documentation components
```

## Running the App

After generating tokens, the app can be used in two ways:

### 1. Development Mode

```bash
npm run dev
```
This will:
- Start the Vite development server
- Load the generated token files
- Display the token documentation UI
- Enable hot reloading for token changes

### 2. Token Updates Workflow

1. Modify token values in `tokens/src/global/*.json`
2. Run token build:
```bash
npm run tokens:build
```
3. The app will automatically reflect the changes in:
   - CSS variables
   - TypeScript types
   - Documentation UI

### Viewing Token Documentation

The app provides a visual documentation of all tokens:
- Navigate to `http://localhost:5173` (default Vite port)
- View sections for Colors, Typography, Spacing, and Effects
- Each token displays its name, value, and visual representation

## Token Usage

### In React Components

```typescript
import { useDesignToken } from '../hooks/useDesignToken';

function Button() {
  return (
    <button style={{ 
      backgroundColor: useDesignToken('color-core-brand-primary-500'),
      padding: useDesignToken('size-spacing-4')
    }}>
      Click me
    </button>
  );
}
```

### In CSS

```css
.button {
  background-color: var(--color-core-brand-primary-500);
  padding: var(--size-spacing-4);
}
```

## Available Tokens

### Colors
- Brand colors (primary, secondary)
- Status colors (error, success, warning, info)
- Neutral colors

### Typography
- Font sizes: xs, sm, base, lg, xl, 2xl
- Font weights: normal, medium, semibold, bold

### Spacing
- Scale: 1-16 (including fractional values 1.5, 2.5)
- Common spacing values in rem units

### Effects
- Box shadows: sm, md, lg, xl
- Other visual effects

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Run `npm run tokens:build`
5. Submit a pull request

## License

MIT
