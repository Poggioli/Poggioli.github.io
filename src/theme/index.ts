import { createStitches } from '@stitches/react';
import { brown, oliveA } from '@radix-ui/colors'

const { createTheme } = createStitches({
  media: {
    mobile: '(min-width: 320px)',
    tablets: '(min-width: 481px)',
    smallDesktops: '(min-width: 769px)',
    normalDesktops: '(min-width: 1025px)',
    largeDesktops: '(min-width: 1201px)',
  },
  theme: {
    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '128px'
    },
    sizes: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '128px'
    },
    fontSizes: {
      1: '.625rem',
      2: '.75rem',
      3: '.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '1.75',
      9: '2.25rem',
      10: '2.75rem',
      11: '3.75rem',
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 600,
      4: 700,
    },
    lineHeights: {
      1: 1.2,
      2: 1.5,
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '99999px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    colors: {
      ...brown,
      ...oliveA,

      appBackground: '$brown1',
      cardBackground: '$brown2',
      sideBackground: '$brown2',

      subtleNormalBackground: '$brown3',
      subtleHoverBackground: '$brown4',
      subtlePressedBackground: '$brown5',

      solidNormalBackground: '$brown9',
      solidHoverBackground: '$brown10',
      solidPressedBackground: '$brown10',

      greyTextLowContrast: '$oliveA11',
      greyTextHighContrast: '$oliveA12',

      white: "#FFF",

      colorTextLowContrast: '$brown11',
      colorTextHighContrast: '$brown12',

      separators: "$brown6",
      border: "$brown7",
      borderHover: "$brown8",
    }
  }
})

const lightTheme = createTheme({})


export { lightTheme }
