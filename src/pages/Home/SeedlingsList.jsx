
import React from "react";
import ProfilePopup from "../../components/profilePopup/ProfilePopup";
import { SimpleGrid, Container } from "@chakra-ui/react";

function SeedlingsList({ people, searchInput, filteredResults }) {
  console.log({ searchInput });
  console.log({ filteredResults });
  
  return (
    <Container maxW="container.xl">
      <SimpleGrid minChildWidth="250px" spacingX={5} spacingY={10}>
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
                <ProfilePopup person={person} />
                </div>
              );
            })}
      </SimpleGrid>
    </Container>
  );
}

export default SeedlingsList;
