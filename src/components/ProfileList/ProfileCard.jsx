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
    
          <Center py={6} onClick={ onClickCard }>
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
                    image
                }
                objectFit={'cover'}
              />
             
              <Box p={2} className='card-bg-color'>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                    {name}
                  </Heading>
                </Stack>

              </Box>
            </Box>
          </Center>
        );
      }

export default ProfileCard;