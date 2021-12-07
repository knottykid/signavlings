import React from "react";
import { Button, Image, Box } from '@chakra-ui/react';
import "./style.css";


function Home () {

          return (

            <div className= "home" >
                    <Box>
                        <Image objectFit='cover' src='https://cdn.signavio.com/uploads/2019/07/signavio-info-rectangle.jpg' />
                        <Button colorScheme='pink' variant='solid'>
                        Settings
                        </Button>  
                    </Box>

                      
            </div>
        )
    
}
export default Home;