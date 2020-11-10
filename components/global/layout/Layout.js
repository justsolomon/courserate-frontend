import { Box } from '@chakra-ui/core';
import Header from '../header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box p='8'>{children}</Box>
    </>
  );
}

export default Layout;
