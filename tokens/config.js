const StyleDictionary = require('style-dictionary');

// Register custom transform for CSS variables
StyleDictionary.registerTransform({
  name: 'css/vars',
  type: 'value',
  transformer: (token) => {
    // Return the raw value
    return token.value;
  }
});

// Register custom format for CSS variables
StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: ({ dictionary }) => {
    return `\
:root {
${dictionary.allTokens.map(token => `  --${token.name}: ${token.value};`).join('\n')}
}`;
  }
});

module.exports = {
  source: ['tokens/src/**/*.json'],
  platforms: {
    css: {
      transforms: ['css/vars'],
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    }
  }
};