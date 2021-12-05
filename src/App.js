import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProfileCard from "./components/ProfileList/ProfileCard";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Koalas</h1>
      </div>
      <ProfileCard
        name={"Koala"}
        image={
          "https://images.unsplash.com/photo-1606856140824-925bdd3f6681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        onClickCard={() => console.log("clicked")}
      />
    </ChakraProvider>
  );
}

export default App;
