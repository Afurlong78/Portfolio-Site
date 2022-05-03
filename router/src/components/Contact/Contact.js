import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Styled from '../Global/GlobalStyle'




const Contact = () =>{

    /* ANIMATIONS */
    const pageAnimation={
        exit:{
            x:`-100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }
    
    /* ANIMATIONS */
    
    
    return(
        <Styled.MainContainer
         variants={pageAnimation}
         exit='exit'
         className=''
        >
            <Styled.HeaderText className='display-1'>
            Contact Me
            </Styled.HeaderText>
            <Styled.HeaderTextBorderBottom/>
        
        </Styled.MainContainer>
    );
}

export default Contact;



//