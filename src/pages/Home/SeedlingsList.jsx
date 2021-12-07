import React from 'react'
import ProfileCard from '../../components/ProfileList/ProfileCard'
import { SimpleGrid, Container} from '@chakra-ui/react'


function SeedlingsList({people}) {
    return (

        <Container maxW='container.xl'>
            <SimpleGrid minChildWidth='250px' spacingX={5} spacingY={10} >          
             {people ? (people.map((person, i)=>{
              return(
                <div key ={`${i}${person.name}`}>
                  <ProfileCard name={person.name} image={person.photo}/>
                </div>
                )
              })) : null}
            </SimpleGrid>
       </Container>
        
    )
}

export default SeedlingsList

