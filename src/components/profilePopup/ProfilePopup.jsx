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
    Wrap
  } from '@chakra-ui/react'

const ProfilePopup = ({people}) => {
    const person = people[0]
    const ourPerson = person.map((detail) => console.log(detail))
    // console.log(ourPerson)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <React.Fragment>
        <Button onClick={onOpen}>Open Modal</Button>
        {/* <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent style={{textAlign: 'center', padding: '100px', paddingTop: '20px'}}>
          <Avatar size='2xl' name={ourPerson.name} src={ourPerson.image} style={{margin: 'auto'}}/>
            <ModalHeader>{ourPerson.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <div>
                 Location: {ourPerson.location}
                 Join date: {ourPerson.joinDate}
                 Bio: {ourPerson.bio}
             </div>
            </ModalBody> 
          
           </ModalContent>
        </Modal> */}
      </React.Fragment>
    )
}

export default ProfilePopup;
