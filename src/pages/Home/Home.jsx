import React from "react";

import { Button, Image, Stack, VStack, Box, Flex, Containe, useBreakpointValue, Text} from '@chakra-ui/react';
import "./style.css";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import TextAnimation from '../../components/text/TextAnimation';


function Home () {

          return (

            <Flex
                w={'full'}
                h={'100vh'}
                // backgroundImage={
                //     'url(https://cdn.signavio.com/uploads/2019/07/signavio-info-rectangle.jpg)'
                // }
                bgGradient={[
                  'linear(to-tr, pink,300, teal.300, green.200)',
                  'linear(to-t, blue.200, teal.500)',
                  'linear(to-b, pink.500, purple.300, teal.300)',
                ]}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>


            <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
              {/* <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor
              </Text> */}
              <TextAnimation/>
              <Stack direction='row' >

              <Box className="btn-font"
                as='button'
                height='50px'
                width='200px'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='2px'
                px='8px'
                borderRadius='15px'
                fontSize='14px'
                fontWeight='semibold'
                bg='transparent'
                borderColor='#ccd0d5'
                color='white'
                fontSize='16px'
                _hover={{ bg: '#AD0F5B' }}
                _active={{
                  bg: '#dddfe2',
                  transform: 'scale(0.98)',
                  borderColor: '#bec3c9',
                }}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
              >

                <a href="/list"> VIEW SEEDLINGS</a>

              </Box>
              </Stack>
            </VStack>
        </Flex>
        );


       

}
export default Home;