import { extendTheme } from '@chakra-ui/react';

const fonts = {
  body: 'Open Sans, sans-serif',
  heading: 'Roboto, sans-serif',
};

const customTheme = extendTheme({
  fonts,
  fontWeights: {
    medium: 600,
  },
});

export default customTheme;
