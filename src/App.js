import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <h1>Koalas</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
