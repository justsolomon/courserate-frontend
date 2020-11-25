import { Box } from '@chakra-ui/react';
import Header from '../header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box p={['0', '6', '8']}>{children}</Box>
    </>
  );
}

export default Layout;
