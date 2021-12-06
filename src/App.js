import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import SeedlingsList from "./pages/Home/SeedlingsList";

function App() {

  const [ data, setData] = useState([])

  useEffect ( async ()=>{
    const response = await axios({
      method: 'get',
      url: 'https://2b5b7952-d207-4316-bd73-20b489332208.mock.pstmn.io/api/profile',
    })
    setData(response.data)
  }, []
  )

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <SeedlingsList people={data}/>
      </div>

    </ChakraProvider>
  );
}

export default App;
