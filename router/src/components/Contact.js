import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const MainContainer = styled(motion.div)`
    height:93vh;
    width:75%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    overflow:hidden;

    margin:auto;
`

const ContactHeaderText = styled(motion.h1)`
font-family: 'Poppins', sans-serif;
font-weight:700;

`

const ContactHeaderTextBorder = styled(motion.div)`
    border: 1px solid black;
    width:100%;
`




const Contact = () =>{

    const pageAnimation={
        exit:{
            x:`-100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }
    
    return(
        <MainContainer 
         variants={pageAnimation}
         exit='exit'
         
        >
            <ContactHeaderText className='display-1'>
                Contact Me
            </ContactHeaderText>
            <ContactHeaderTextBorder/>

        </MainContainer>
    );
}

export default Contact;



//