import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const MainContainer = styled(motion.div)`
    height:93vh;
    width:100%;

    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
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
         hello
        </MainContainer>
    );
}

export default Contact;



//