// Token descriptions provide context and usage guidelines for design tokens

export const tokenDescriptions = {
  colors: {
    theme: {
      light: {
        primary: {
          50: 'Lightest primary shade, used for subtle backgrounds and hover states',
          100: 'Very light primary, useful for hover states and subtle UI elements',
          200: 'Light primary, good for disabled states and subtle highlights',
          300: 'Soft primary, used for secondary buttons and active states',
          400: 'Medium-light primary, good for hover states on dark backgrounds',
          500: 'Main primary color, used for primary buttons and key UI elements',
          600: 'Medium-dark primary, used for hover states on primary buttons',
          700: 'Dark primary, used for active states and text contrast',
          800: 'Very dark primary, used for high contrast text and icons',
          900: 'Darkest primary shade, used for maximum contrast elements',
        },
      },
    },
    core: {
      neutral: {
        0: 'Pure white, used for backgrounds and maximum contrast',
        50: 'Lightest gray, used for subtle backgrounds and hover states',
        100: 'Very light gray, used for backgrounds and disabled states',
        200: 'Light gray, used for borders and dividers',
        300: 'Soft gray, used for disabled text and icons',
        400: 'Medium gray, used for placeholder text and secondary icons',
        500: 'Base gray, used for secondary text and icons',
        600: 'Medium-dark gray, used for body text',
        700: 'Dark gray, used for headings and primary text',
        800: 'Very dark gray, used for high contrast text',
        900: 'Darkest gray, used for maximum contrast text',
      },
    },
  },
  typography: {
    fontSize: {
      xs: 'Extra small text, used for captions and helper text (12px)',
      sm: 'Small text, used for secondary text and labels (14px)',
      base: 'Base text size, used for body text (16px)',
      lg: 'Large text, used for emphasized body text (18px)',
      xl: 'Extra large text, used for subheadings (20px)',
      '2xl': 'Double extra large text, used for headings (24px)',
    },
    fontWeight: {
      normal: 'Regular weight, used for body text and general content',
      medium: 'Medium weight, used for semi-emphasized text and buttons',
      semibold: 'Semi-bold weight, used for subheadings and important text',
      bold: 'Bold weight, used for headings and maximum emphasis',
    },
  },
  spacing: {
    1: 'Extra small spacing (4px), used for tight gaps and compact layouts',
    '1.5': 'Very small spacing (6px), used for compact but readable spacing',
    2: 'Small spacing (8px), used for related elements',
    '2.5': 'Medium-small spacing (10px), used for balanced compact layouts',
    3: 'Smaller medium spacing (12px), used for comfortable reading',
    4: 'Base spacing (16px), used for standard content spacing',
    5: 'Large spacing (20px), used for separating sections',
    6: 'Larger spacing (24px), used for major section breaks',
    8: 'Extra large spacing (32px), used for significant separation',
    10: 'Very large spacing (40px), used for major layout sections',
    12: 'Extra extra large spacing (48px), used for major component spacing',
    16: 'Maximum spacing (64px), used for page-level spacing',
  },
  effects: {
    shadow: {
      sm: 'Subtle shadow for slight elevation (cards, buttons)',
      md: 'Medium shadow for moderate elevation (dropdowns, popovers)',
      lg: 'Large shadow for significant elevation (modals, floating elements)',
      xl: 'Extra large shadow for maximum elevation (overlays, dialogs)',
    },
  },
} as const;