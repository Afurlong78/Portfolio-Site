import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import filledgreentriangle from '../assets/filledgreentriangle.png';
import purplehexagon from '../assets/purplehexagon.png';
import yellowrectangle from '../assets/yellowrectangle.png';
import filledbluecircle from '../assets/filledbluecircle.png';
import redrectangle from '../assets/redrectangle.png';
import lightbluetriangle from '../assets/lightbluetriangle.png';
import pinksquare from '../assets/filledpinksquare.png';
import filledorangepentagon from '../assets/filledorangepentagon.png';
import filledbluerectangle from '../assets/filledbluerectangle.png';
import purplecircle from '../assets/purplecircle.png';
import lightredrectangle from '../assets/lightredrectangle.png';


const Canvas =styled(motion.div)`
  height:100vh;
  width:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  margin:0;
  padding:0;
`

const TheFGT = styled(motion.div)`
  position:fixed;
  margin-top:210px;
  margin-left: 300px;

  

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 350px solid transparent;
  border-bottom: 350px solid #89E5A4;
`

const Purplehexagon = styled(motion.img)`
 position:fixed;
 width:100%;
 height:100%;
 max-width: 200px;
 max-height: 200px;

 margin-top:120px;
 margin-left: 90px;
`

const Yellowrectangle = styled(motion.img)`
 position:fixed;
 width:100%;
 height:100%;
 max-width: 520px;
 min-width: 520px;
 max-height: 520px;
 min-height: 520px;
 z-index:-2;

 margin-left: 600px;
 margin-top: 160px;
`


const TheFBC = styled(motion.div)`
position:fixed;
width:100%;
height:100%;
max-width: 180px;
max-height: 180px;
border-radius:50%;

margin-top:180px;
 margin-left:900px;

 background: #7E94FF;
`

const Redrectangle = styled(motion.img)`
 overflow:hidden;
 position:absolute;
 position:fixed;
 width:100%;
 height:100%;
 max-width: 800px;
 min-width: 800px;
 max-height: 240px;
 min-height: 240px;
 z-index: -2;

 margin-top:100px;
 margin-left:700px;
`

const Lightbluetriangle = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 450px;
max-height: 450px;


margin-top: 100px;
margin-left: 1350px;
`

const Filledpinksquare = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 150px;
max-height: 150px;
z-index:10;

margin-top:130px;
margin-left: 1650px;
`

const Filledorangepentagon = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 300px;
max-height:300px;

margin-top:600px;
margin-left:1600px;
z-index:1;
`


const TheFBR = styled(motion.div)`
 position:fixed;

 margin-top: 700px;
 margin-left:700px;

 width: 700px;
 height: 80px;

 background: #C9C5FF;
`

const Purplecircle = styled(motion.img)`
position:fixed;
width:100%;
height:100%
min-width:300px;
min-height:300px;
max-width: 300px;
max-height: 300px;

margin-top:590px;
margin-left:1250px;
`

const TheRR = styled(motion.div)`
 position:fixed;

 margin-top:620px;
 margin-left:80px;

 width: 300px;
 height:200px;

 border:4px solid #FF6A6A;
`

//-------------------------------------------------------//
//------------------BOUNCING BALL------------------------//
//-------------------------------------------------------//

const PreviewContainer = styled.div`
  position:fixed;
  margin-top:340px;
  margin-left:70px;
  width: 10em;
  height: 22em;
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    //margin-right: 4em;
  }
`;

const AnimationContainer = styled.div`
  width: 100%;
  height: 17em;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform:translate(-46%, 0%)
`;

const GroundContainer = styled.div`
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
`;


const Ball = styled(motion.div)`
  width: 9em;
  height: 9em;
  border-radius: 50%;
  background-color: #00cec9;
  position:fixed;

  @media all and (max-width: 1750px){
      display:none;
  }
`;



//-------------------------------------------------------//
//------------------BOUNCING BALL------------------------//
//-------------------------------------------------------//



const WallPaper =() =>{

  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeIn",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.5,
    },
  };
    // const Wallpaper={
    //     hidden:{ opacity: 0 },
    //     show:{
    //       opacity: 1,
    //       transition:{
    //         staggerChildren: 0.5,
    //       },
    //     },
    //   };
    
    //   const WallPaperItem={
    //     hidden:{ 
    //       opacity: 0,
    //     },
    //     show:{
    //       opacity:1,
    //       transition:{
    //         duration: 2,
    //       },
    //     },
    // };
      
    const filledGreenTriangle={
        hidden:{ opacity: 0, x:-900},
        visible:{ opacity: 1, x: 0 },
    };

    const redRectangle={
        hidden:{ opacity: 0, y:-600},
        visible:{ opacity: 1, y: 0 },
    };
    
    const filledPinkSquare={
        hidden:{opacity: 0, x:300},
        visible:{opacity: 1, x:0 }
    }
    
    const filledBlueCircle={
        hidden:{opacity:0, x:1000},
        visible:{opacity: 1, x:0}
    }
    
    const filledOrangePentagon={
        hidden:{opacity:0, y:300},
        visible:{opacity:1, y:0}
    }

    const filledBlueRectangle={
        hidden:{opacity:0, y:800},
        visible:{opacity:1, y:0}
    }

    const purpleCircle={
        hidden:{opacity:0, y:800},
        visible:{opacity:1, y:0}
    }

    const purpleHexagon={
        hidden:{opacity:0, x:-400},
        visible:{opacity: 1, x:0}
    }

    const lightRedRectangle={
        hidden:{opacity:0, x:-400},
        visible:{opacity: 1, x:0}
    }

    return(
    <>
    <Canvas>

      <TheFGT 
         style={{ rotate: '-145deg'}}
         variants={filledGreenTriangle}
         transition={{ duration: 0.4 }}
         drag={true} 
         dragConstraints={{ left:0, right:500, top:0, bottom:200}}
         whileHover={{scale:1.2, transition:{duration: 0.2}, cursor: "grabbing" }}
         initial='hidden'
         animate='visible'
      /> 
   
      <Filledpinksquare
       src={pinksquare}
       variants={filledPinkSquare}
       initial='hidden'
       animate='visible'
       transition={{duration: 1 }} 
       whileHover={{scale:1.2, transition:{duration: 0.2}, cursor: "grabbing"  }}
       drag={true} 
       dragConstraints={{ left:5, right:5, top:5, bottom:5}} 
      />
      <Purplehexagon
        src={purplehexagon}
        initial='hidden'
        animate='visible'
        variants={purpleHexagon}
        transition={{ duration: 1 }}
        whileHover={{scale:1.2, transition:{duration: 0.2}, cursor: "grabbing"  }}
        drag={true} 
        dragConstraints={{ left:0, right:200, top:0, bottom:200}} 
      />
      <TheFBC
       initial='hidden'
       animate='visible'
       variants={filledBlueCircle}
       transition={{ duration: 1 }}
       whileHover={{
         scale:1.2,
         transition:{duration: 0.2}, 
         cursor: "grabbing"  
      }}
       drag={true} 
       dragConstraints={{ left:0, right:0, top:0, bottom:400}} 
      />
      <Lightbluetriangle  
       src={lightbluetriangle}
       initial={{ opacity: 0}}
       animate={{ opacity: 1, transition:{ duration: 1.5 }}}
       whileHover={{scale:1.05, transition:{duration: 0.2}, cursor: "grabbing"  }}
       drag={true} 
       dragConstraints={{ left:0, right:0, top:0, bottom:0}}
    />
      <Yellowrectangle
        src={yellowrectangle}
        initial={{ opacity: 0}}
        animate={{ opacity: 1, transition:{ duration: 1.3 }}}
        drag={true} 
         dragConstraints={{ left:0, right:0, top:0, bottom:0}}
      />
      <Redrectangle
       src={redrectangle}
       initial='hidden'
       animate='visible'
       transition={{duration: 1 }}
       variants={redRectangle}
       drag={true} 
         dragConstraints={{ left:0, right:0, top:0, bottom:0}}
      />
      <Filledorangepentagon
       src={filledorangepentagon}
       initial='hidden'
       animate='visible'
       variants={filledOrangePentagon}
       transition={{ duration: 1  }}
       whileHover={{scale:1.2, transition:{duration: 0.2}, cursor: "grabbing"  }}
       drag={true} 
       dragConstraints={{ left:10, right:10, top:10, bottom:10}} 
      />
      <TheFBR
       style={{ rotate:'-35deg'}}
       initial='hidden'
       animate='visible'
       variants={filledBlueRectangle}
       transition={{ duration: 1.6 }}
       whileHover={{scale:1.1, transition:{duration: 0.2}, cursor: "grabbing"  }}
       drag={true} 
       dragConstraints={{ left:0, right:0, top:0, bottom:0}}
      />
      <Purplecircle
        src={purplecircle}
        initial='hidden'
        animate='visible'
        variants={purpleCircle}
        transition={{duration:1.6}}
        whileHover={{
          scale:1.2,
          transition:{duration: 0.2}, 
          cursor: "grabbing"  
       }}
       drag={true} 
       dragConstraints={{ left:10, right:10, top:10, bottom:10}}
      />

      <TheRR 
        style={{ rotate:'35deg'}}
        initial='hidden'
        animate='visible'
        variants={lightRedRectangle}
        transition={{ duration: 1.2 }}
        whileHover={{
          scale:1.2,
          transition:{duration: 0.2}, 
          cursor: "grabbing"  
        }}
        drag={true} 
        dragConstraints={{ left:0, right:500, top:10, bottom:0}}
      />

     {/* <PreviewContainer>
      <AnimationContainer >
        <Ball
            className='shadow'
            transition={bounceTransition}
            animate= {{ 
            y: ["0em", "31em"],
            
            //backgroundColor: ["#9b59b6", "#f1c40f"],
          }}
        />
        <GroundContainer />
      </AnimationContainer>
     </PreviewContainer> */}
    </Canvas>
    
    </>
    );  
}

export default WallPaper;