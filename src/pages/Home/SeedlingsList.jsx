
import React from "react";
import ProfileCard from "../../components/ProfileList/ProfileCard";
import { SimpleGrid, Container } from "@chakra-ui/react";
import Style from "./style.css";

function SeedlingsList({ people, searchInput, filteredResults }) {
  return (
    <Container maxW="container.xl">
      <SimpleGrid minChildWidth="250px" spacingX={5} spacingY={10}>
        {searchInput.length > 1
          ? filteredResults.map((filter) => {
              return (
                <div key={filter.name}>
                  <ProfileCard name={filter.name} image={filter.photo} />
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
