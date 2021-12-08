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
    Button,
    Avatar,
  } from '@chakra-ui/react'

const ProfilePopup = ({ person }) => {

    // return (people.map((person)=>{
        const { isOpen, onOpen, onClose } = useDisclosure()
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
                    <div>
                        Location: {person.location}
                        Join date: {person.joinDate}
                        Bio: {person.bio}
                        Role: {person.role}
                    </div>
                    </ModalBody> 
                
                </ModalContent>
                </Modal>
            </React.Fragment>) 
            )
        // }
    // ))
}

export default ProfilePopup;
