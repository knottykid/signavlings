import React from 'react';
import './ProfileCard.css';
import {
    Heading,
    Box,
    Center,
    Image,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

function ProfileCard({name, image, onClickCard}) {
    return (
          <Center  onClick={ onClickCard } data-testid='profileCard'>
            <Box
              maxW={'270px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}>
              <Image
                h={'200px'}
                w={'full'}
                src={
                    image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBoB3uhPYwy6Vtp1PelM5Zyf8Ov5U98DANA&usqp=CAU'
                }
                alt='profilePic'
                objectFit={'cover'}
              />
             
              <Box p={2} className='card-bg-color'>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} >
                    {name}
                  </Heading>
                </Stack>

              </Box>
            </Box>
          </Center>
        );
      }

export default ProfileCard;