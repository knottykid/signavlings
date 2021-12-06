import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import ProfileCard from "./components/ProfileList/ProfileCard";

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
      </div>
      {data ? (data.map((person)=>{
        return(
        <div key ={person.name}>
          <ProfileCard name={person.name} image={person.photo}/>
        </div>
        )
      })) : null}
    </ChakraProvider>
  );
}

export default App;
