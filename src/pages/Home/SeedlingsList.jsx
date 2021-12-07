import React from 'react';
import ProfileCard from '../../components/ProfileList/ProfileCard';
import { SimpleGrid, Container} from '@chakra-ui/react';
import Style from './style.css'




function SeedlingsList({people}) {
    return (
        <Container maxW='container.xl'>
            <SimpleGrid minChildWidth='250px' spacingX={5} spacingY={10} >            
             {people ? (people.map((person)=>{
        return(
        <div key={person.name}>
          <ProfileCard name={person.name} image={person.photo}/>
        </div>
        )
      })) : null}
       </SimpleGrid>
       </Container>
        
    )
}

export default SeedlingsList

