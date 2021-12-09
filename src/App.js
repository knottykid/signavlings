import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import SeedlingsList from "./pages/SeedlingsList/SeedlingsList";
import { Routes, Route } from "react-router-dom";
import * as CONST from "./utils/const";
import * as PATH from "./utils/path";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(async () => {
    const response = await axios.get(CONST.SERVER_URL);
    setData(response.data);
  }, []);

  const searchItems = async (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
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
          list={PATH.SEEDLIST}
        />
        <Routes>
          <Route path={PATH.HOMEPAGE} element={<Home />} />
          <Route
            path={PATH.SEEDLIST}
            element={
              <SeedlingsList
                people={data}
                searchInput={searchInput}
                filteredResults={filteredResults}
              />
            }
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
