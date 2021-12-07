import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import SeedlingsList from "./pages/Home/SeedlingsList";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(async () => {
    const response = await axios({
      method: "get",
      url: "https://2b5b7952-d207-4316-bd73-20b489332208.mock.pstmn.io/api/profile",
    });
    setData(response.data);
  }, []);

  const searchItems = async (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        // console.log("<<", item);
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const onChange = (e) => searchItems(e.target.value);

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar
          data={data}
          onChange={onChange}
          searchInput={searchInput}
          filteredResults={filteredResults}
        />
        <SeedlingsList
          people={data}
          searchInput={searchInput}
          filteredResults={filteredResults}
        />
      </div>
    </ChakraProvider>
  );
}

export default App;
