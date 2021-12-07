import React from "react";
import ProfileCard from "../../components/ProfileList/ProfileCard";
import { SimpleGrid, Container } from "@chakra-ui/react";
import Style from "./style.css";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function SeedlingsList({ people, searchInput, filteredResults }) {
  console.log({ searchInput });
  console.log({ filteredResults });
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} display={{ md: "flex" }} spacing={10}>
        {/* //{people.filter(person => person.toLowerCase().includes(searchInput.toLowerCase())).map((filtered, key) => (<div key={key}>{filtered}{' '}</div>))} */}

        {searchInput.length > 1
          ? filteredResults.map((filter) => {
              console.log("ZU", filter.name);
              return (
                <div key={filter.name}>
                  <h1>{filter.name}</h1>
                </div>
              );
            })
          : people.map((person) => {
              return (
                <div key={person.name}>
                  <ProfileCard name={person.name} image={person.photo} />
                </div>
              );
            })}
      </SimpleGrid>
    </Container>
  );
}

export default SeedlingsList;
