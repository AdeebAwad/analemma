import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Main from './Components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
