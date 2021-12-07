import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Avatar,
    Table,
    Tbody,
    Tr,
    Td,
  } from '@chakra-ui/react'

const ProfilePopup = ({people, clickedId}) => {
  const theme = {
    colors: {
      purpleSig: '#fafafa'
    },
  }

    return (people.map((person)=>{
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
        person.profileId === clickedId ?
            (<React.Fragment>
              
                <Button onClick={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent style={{textAlign: 'center', paddingTop: '20px'}}>
                <Avatar size='2xl' name={person.name} src={person.photo} style={{margin: 'auto'}}/>
                    <ModalHeader>{person.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Table variant='striped' colorScheme={theme.colors.purpleSig}>    
                      <Tbody>
                        <Tr>
                          <Td>Location:</Td>
                          <Td>{person.location}</Td>  
                        </Tr>
                        <Tr>
                          <Td>Join Date: </Td>
                          <Td>{person.joinDate}</Td>
                        </Tr>
                        <Tr>
                          <Td>Role</Td>
                          <Td>{person.role}</Td>
                        </Tr>
                        <Tr>
                          <Td>Bio</Td>
                          <Td>{person.bio}</Td>
                        </Tr>
                      </Tbody>                  
                    </Table>
                    
                    </ModalBody> 
                
                </ModalContent>
                </Modal>
            </React.Fragment>) : null
            )
        }
    ))
}

export default ProfilePopup;
