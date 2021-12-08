import React from 'react'
import { SimpleGrid, Container} from '@chakra-ui/react'
import ProfilePopup from '../../components/profilePopup/ProfilePopup'


function SeedlingsList({people}) {
    return (

        <Container maxW='container.xl'>
            <SimpleGrid minChildWidth='250px' spacingX={5} spacingY={10} >            
             {people ? (people.map((person, i)=>{
              return(
                <div key={`${i}${person.name}`} >
                  <ProfilePopup person={person} />
                </div>
                )
              })) : null}
            </SimpleGrid>
       </Container>
        
    )
}

export default SeedlingsList

