import React from "react";
import ProfilePopup from "../../components/profilePopup/ProfilePopup";
import { SimpleGrid, Container } from "@chakra-ui/react";

function SeedlingsList({ people, searchInput, filteredResults }) {
  return (
    <Container maxW="container.xl" className='seedlingsListContainer'>
      <SimpleGrid minChildWidth="250px" spacingX={5} spacingY={10}>
        {searchInput.length > 1
          ? filteredResults.map((filter) => {
              return (
                <div key={filter.name}>
                  <ProfilePopup person={filter} />
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
