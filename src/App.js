import React from 'react';
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <h1>Koalas</h1>
    </div>
    </ChakraProvider>
  );
}

export default App;

