import React from 'react'
import ProfileCard from '../ProfileList/ProfileCard'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Avatar,
    Table,
    Tbody,
    Tr,
    Td,
  } from '@chakra-ui/react'

const ProfilePopup = ({ person }) => {

        const { isOpen, onOpen, onClose } = useDisclosure()

        const theme = {
            colors: {
              purpleSig: '#fafafa'
            },
          }

        return (
            (<React.Fragment>
                <ProfileCard name={person.name} image={person.photo} onClickCard={onOpen}/>
                <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent style={{textAlign: 'center', padding: '100px', paddingTop: '20px'}}>
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
            </React.Fragment>) 
            )
}

export default ProfilePopup;
