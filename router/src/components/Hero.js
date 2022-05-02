import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WallPaper from './WallPaper';
import nearFall from '../assets/Projects/NearFall.jpg';
import weather from '../assets/Projects/weather.jpg';
import guStakes from '../assets/ProjectCard3.PNG';
import omniFoods from '../assets/Projects/omnifoods.jpg';

const HeroContainer = styled(motion.div)`
  overflow:hidden;
  overflow-y:hidden;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


`

const HeroTextContainer = styled(motion.div)`
height:100vh;
width:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:start;

margin-top:-60px;

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
    font-size:40px;
    letter-spacing: 0px; 
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
  }

  @media all and (max-width:420px){
    font-size:30px;
    padding-bottom:10px;
  }

  @media all and (max-width:330px){
    font-size:22px;
  }
}

p{ 
  filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.2))
  font-weight: 700;
}

p{
  z-index:1;

  @media all and (max-width:800px){
    font-size:25px;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2));
  }

  @media all and (max-width:420px){
    font-size:19px;
  }
  @media all and (max-width:330px){
    font-size:14px;
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
      height:4rem;
      width:10rem;
      font-size:1.5rem;
    }

  
    @media all and (max-width:420px){
      width:9rem;
      font-size:1.5rem;
    }

    @media all and (max-width:330px){
      font-size:1rem;

      width: 7rem;
      height: 3.5rem;
    }
`
const HeroBtnLink = styled(Link)`
    z-index:5;
    
`

const HeroBtnRow = styled.div`
    width:100%;
    display:flex;

    @media all and (max-width:800px){
  
    }

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
    <HeroContainer
      exit="exit"
      variants={pageAnimation}
      className=''
    >

    <WallPaper/>
    <HeroTextContainer className=''>
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

      <HeroBtnRow className=''>

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

      </HeroBtnRow>
      </HeroTextContainer>
    
    </HeroContainer>
  );
}

export default Hero;
