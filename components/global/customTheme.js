import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontWeights: {
    medium: 600,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

export default customTheme;
