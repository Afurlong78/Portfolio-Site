import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WallPaper from './WallPaper';

const HeroContainer = styled(Container)`
  height:85vh;
  overflow:hidden;
  overflow-y:hidden;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  
  h1{
    z-index:20;
    filter: drop-shadow(30px 20px 4px rgba(0, 0, 0, 0.2));
    font-weight:700;
  }

  h1{
    @media all and (max-width:980px){
      font-size:55px;
      padding:0;
      margin:0;
    }
  }

  h1{
    @media all and (max-width:800px){
      display:flex;
      justify-content:center;
      align-items:center ;
      margin-right:auto;
      margin-left:auto;
      font-size:40px;
      letter-spacing: 0px; 
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
    }

    @media all and (max-width:420px){
      font-size:30px;
      padding-bottom:10px;
    }
  }

  p{ 
    filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.2))
    font-weight: 700;
  }

  p{
    z-index:998;

    @media all and (max-width:800px){
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:25px;
      margin-right:auto;
      margin-left:auto;
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
    }

    @media all and (max-width:420px){
      font-size:19px;
    }
  }


`
const HeroBtn = styled(motion.button)`
    height:5rem;
    width:15rem;
    border:2px solid black;
    font-size:2rem;
    font-weight:700;
    color:white;
    background-color:black;
    margin-right:3.5rem;
    border-radius:16px;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    --border-size: 2px;

    &:hover{
      background-color:transparent;
      border:2px solid #1E1E1E;
      color:#1E1E1E;
      transition: 0.15s ease-in-out;
    }

    @media all and (max-width:800px){
      display:flex;
      justify-content:center;
      width:13rem;
      align-items:center;
      margin-right:auto;
      margin-left:auto;
    }
  
    @media all and (max-width:420px){
      width:9rem;
      font-size:1.5rem;
    }
`
const HeroBtnLink = styled(Link)`
    z-index:5;
    
`

function Hero() {

  const fadeLeft={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 }
  };

  // const fadeRight={
  //   hidden:{opacity: 0, x:300},
  //   visible:{opacity: 1, x:0 }
  // }

  // const dropDown={
  //   hidden:{opacity:0, y:-300},
  //   visible:{opacity: 1, y:0}
  // }

  const fadeUp={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
    transition:{ 
      duration:0.1 
    }
  }

  const pageAnimation = {
    exit:{ transition:{duration: 0.6}, opacity:0 }
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
    >

    <WallPaper/>
  
    <HeroContainer className='d-flex flex-column justify-content-center align-items-start mt-5 pt-5'>
      <motion.h1 className='display-2 pt-5 mt-5'
       initial='hidden'
       animate='visible'
       transition={{ duration: 1.5, type:'spring', bounce: 0.4 }}
       variants={fadeLeft}
      >
        <strong>Hello, Im Andrew Furlong</strong>
      </motion.h1>
      <motion.p className='h1 ps-1'
       initial='hidden'
       animate='visible'
       variants={fadeLeft}
       transition={{ duration: 2, type:'spring', bounce: 0.4 }}
      >
      Your <u>Front End</u> Web Developer.
      </motion.p>
      <motion.p className='h2 ps-1'
       initial='hidden'
       animate='visible'
       variants={fadeLeft}
       transition={{ duration: 2.5, type:'spring', bounce: 0.4 }}
      >
      Lets Make Something Amazing!
      </motion.p>
      <Container className='d-flex flex-row  pt-2 ps-1'>

        <HeroBtnLink to='/projects'>
        <HeroBtn className='shadow'
          whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
          whileTap={{ scale: 1, transition:{duration: 0.01 }}}
          transition={{ duration: 1 }}
          initial='hidden'
          animate='visible'
          variants={fadeUp}
        >
          Projects
        </HeroBtn>
        </HeroBtnLink>
        
        <HeroBtnLink to='/contact' >
        <HeroBtn className='shadow'
          whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
          whileTap={{ scale: 1, transition:{duration: 0.01 }}}
          initial='hidden'
          animate='visible'
          transition={{ duration: 1.1 }}
          variants={fadeUp}
        >
         Contact
        </HeroBtn>
        </HeroBtnLink>

      </Container>
    </HeroContainer>
    
    </motion.div>
  );
}

export default Hero;
