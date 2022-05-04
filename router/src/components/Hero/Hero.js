import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Styled from '../Global/GlobalStyle'
import { motion } from 'framer-motion';
import { 
  FilledGreenTriangle,
  FilledBlueCircle,
  BlueRectangle,
  RedRectangle,
  OrangeCircle, 
  YellowRectangle,
  PurpleRectangle,
  FilledBlueTriangle,
  YellowCircle,
  LargeRedRectangle,
  LargeOrangeCircle,
  FilledLightGreenTriangle,
  PinkSquare,
  BlueSquare,
  FilledPurpleTriangle,
  RedCircle,
} from './WallPaper'


const HeroTextContainer = styled(motion.div)`
  height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  letter-spacing:0.8px;

  margin-top:-100px;

  h1{
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif;
    filter: drop-shadow(30px 20px 4px rgba(0, 0, 0, 0.0));
    font-weight: 500;
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
`

function Hero() {

  /* ANIMATIONS */
  
  const pageAnimation = {
    exit:{ transition:{duration: 0.6}, opacity:0 }
  }

  const fadeLeft={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 },
  };

  const filledGreenTriangle={
    hidden:{ opacity: 0, y:-900},
    visible:{ opacity: 1, y: 0 },
    exit: { opacity:0, y:-900 }
  };

  const largeRedRectangle={
    hidden:{ opacity: 0, y:-900},
    visible:{ opacity: 1, y: 0 },
    exit: { opacity:0, y:-900 }
  };

  const filledLightGreenTriangle={
    hidden:{ opacity: 0, y:-900},
    visible:{ opacity: 1, y: 0 },
    exit: { opacity:0, y:-900 }
  };

  const filledBlueCircle={
    hidden:{ opacity: 0, y:-900},
    visible:{ opacity: 1, y: 0 },
    exit: { opacity:0, y:-900 }
  };

  const orangeCircle={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity:0, x:-900 }
  };

  const purpleRectangle={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity:0, x:-900 }
  };

  const redRectangle={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity:0, x:-900 }
  };

  const yellowCircle={
    hidden:{ opacity: 0, x:-900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity:0, x:-900 }
  };

  const fadeUp={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
  };

  const blueTriangle={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
    exit: { opacity:0, y:600 }
  };

  const blueRectangle={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
    exit: { opacity:0, y:600 }
  };

  const redCircle={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
    exit: { opacity:0, y:600 }
  };

  const blueSquare={
    hidden:{opacity:0, y:600},
    visible:{opacity:1, y:0},
    exit: { opacity:0, y:600 }
  };

  const fadeRight={
    hidden:{ opacity: 0, x: 900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity: 0, x: 900}
  };
  
  const filledPinkSquare={
    hidden:{ opacity: 0, x: 900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity: 0, x: 900}
  };

  const largeOrangeCircle={
    hidden:{ opacity: 0, x: 900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity: 0, x: 900}
  };

  const filledPurpleTriangle={
    hidden:{ opacity: 0, x: 900},
    visible:{ opacity: 1, x: 0 },
    exit: { opacity: 0, x: 900}
  };

  const yellowRectangle = {
    hidden:{opacity: 0},
    visible:{opacity: 1},
    exit:{opacity: 0}
  }

  /* ANIMATIONS */

  return (
    <Styled.MainContainer
      exit="exit"
      variants={pageAnimation}
      className=''
    >
      {/* BACKGROUND SHAPES */}
        <FilledGreenTriangle style={{rotate:'-140deg'}}
          whileHover={{scale: 1.1, transition:{ duration: 0.2 } }}
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={filledGreenTriangle}
          transition={{ duration: 0.9 }}
        />
        <FilledBlueCircle
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={filledBlueCircle}
         transition={{ duration: 1.1 }}
        />
        <BlueRectangle style={{rotate:'160deg'}}
         whileHover={{scale: 1.1, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={blueRectangle}
         transition={{ duration: 1.1 }}
        />
        <RedRectangle style={{rotate:'40deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={redRectangle}
         transition={{ duration: 0.9 }}
        />
        <OrangeCircle 
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={orangeCircle}
         transition={{ duration: 1.1 }}
        />
        <YellowRectangle
         style={{ rotate:'120deg'}}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={yellowRectangle}
         transition={{ duration: 0.8 }}
        />
        <PurpleRectangle style={{ rotate:'-20deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={purpleRectangle}
         transition={{ duration: 1.3 }}
        />
        <FilledBlueTriangle style={{ rotate:'-120deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={blueTriangle}
         transition={{ duration: 0.9 }}
        />
        <YellowCircle
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={yellowCircle}
         transition={{ duration: 1.1 }}
        />
        <LargeRedRectangle style={{ rotate:'10deg'}}
         whileHover={{scale: 1.1, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={largeRedRectangle}
         transition={{ duration: 1.4 }}
        />
        <LargeOrangeCircle
         whileHover={{scale: 1.1, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={largeOrangeCircle}
         transition={{ duration: 1.4 }}
        />
        <FilledLightGreenTriangle style={{ rotate:'80deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={filledLightGreenTriangle}
         transition={{ duration: 1.3 }}
        />
        <PinkSquare style={{ rotate:'20deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={filledPinkSquare}
         transition={{ duration: 1.6 }}
        />
        <BlueSquare style={{ rotate:'40deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={blueSquare}
         transition={{ duration: 1.6 }}
        />
        <FilledPurpleTriangle style={{ rotate:'170deg'}}
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={filledPurpleTriangle}
         transition={{ duration: 1.6 }}
        />
        <RedCircle
         whileHover={{scale: 1.2, transition:{ duration: 0.2 } }}
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={redCircle}
         transition={{ duration: 1.4 }}
        />
      {/* BACKGROUND SHAPES */}

    <HeroTextContainer className=''>
      <motion.h1 className='display-2 pt-5 mt-5'
       initial='hidden'
       animate='visible'
       transition={{ duration: 1.5, type:'spring', bounce: 0.4 }}
       variants={fadeLeft}
      >
        <strong>Hello, Im Andrew Furlong</strong>
      </motion.h1>
      <motion.p className='h1 ps-1 mt-1'
       initial='hidden'
       animate='visible'
       variants={fadeLeft}
       transition={{ duration: 2, type:'spring', bounce: 0.4 }}
      >
      Your <u>Front End</u> Web Developer.
      </motion.p>
      <motion.p className='h2 ps-1 mt-1'
       initial='hidden'
       animate='visible'
       variants={fadeLeft}
       transition={{ duration: 2.5, type:'spring', bounce: 0.4 }}
      >
      Lets Make Something Amazing!
      </motion.p>

      <HeroBtnRow className='mt-1'>

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
    
    </Styled.MainContainer>
  );
}

export default Hero;
