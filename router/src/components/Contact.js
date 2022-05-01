import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const MainContainer = styled(motion.div)`
overflow:hidden;
overflow-y:hidden;
display:flex;
justify-content:center;
align-items:center;
`

const ContentContainer = styled(motion.div)`
height:100vh;
width:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;

margin-top:-60px;

background:red;
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
         className=''
        >
            <ContentContainer>

            
        hello
        </ContentContainer>
        </MainContainer>
    );
}

export default Contact;



//