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
  } from '@chakra-ui/react'

const ProfilePopup = ({people, clickedId}) => {

    return (people.map((person)=>{
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
        person.profileId === clickedId ?
            (<React.Fragment>
                <Button onClick={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent style={{textAlign: 'center', padding: '100px', paddingTop: '20px'}}>
                <Avatar size='2xl' name={person.name} src={person.photo} style={{margin: 'auto'}}/>
                    <ModalHeader>{person.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <div>
                        Location: {person.location}
                        Join date: {person.joinDate}
                        Bio: {person.bio}
                        Role: {person.role}
                    </div>
                    </ModalBody> 
                
                </ModalContent>
                </Modal>
            </React.Fragment>) : null
            )
        }
    ))
}

export default ProfilePopup;
