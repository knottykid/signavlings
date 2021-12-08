import React from 'react'
import './style.css'
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
            (
            <React.Fragment>
                <ProfileCard name={person.name} image={person.photo} onClickCard={onOpen} />
                <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size='xl'>
                <ModalOverlay />
                <ModalContent className='modalContent' >
                <div className="avatar-bkg">
                  <Avatar className="avatar-style" size='2xl' name={person.name} src={person.photo} />
                </div>
                    <ModalHeader className="bold-name">{person.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Table >    
                      <Tbody width="100%">
                        <Tr>
                          <Td className="bold">Location:</Td>
                          <Td>{person.location}</Td>  
                        </Tr>
                        <Tr>
                          <Td className="bold">Join Date: </Td>
                          <Td>{person.joiningMonth}</Td>
                        </Tr>
                        <Tr>
                          <Td className="bold">Role:</Td>
                          <Td>{person.role}</Td>
                        </Tr>
                        <Tr>
                          <Td className="bold">Bio:</Td>
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
