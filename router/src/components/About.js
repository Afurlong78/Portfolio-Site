import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fullredcircle from '../assets/About/fullredcircle.png';
import filledyellowrectangle from '../assets/About/filledyellowrectangle.png';
import bluecircle from '../assets/About/bluecircle.png';
import yellowpentagon from '../assets/About/yellowpentagon.png';
import fullbluetriangle from '../assets/About/fullbluetriangle.png';
import fullpurplehexagon from '../assets/About/fullpurplehexagon.png';
import purplerectangle from '../assets/About/purplerectangle.png';
import javascriptlogo from '../assets/About/JavaScript-logo.png';
import reactlogo from '../assets/About/reactJS.png';
import node from '../assets/About/nodeJS.png';
import framer from '../assets/About/framer-motion.webp';

const MainContainer = styled(motion.div)`
    overflow:hidden;
`

const AboutWrapper = styled.div`
    height: 90vh;
    width: 75%;
    margin: auto;
    display: flex;
    justify-content:center;
    flex-direction: column;
    overflow:hidden;

    @media all and (max-width: 1024px){
        
    }

    @media all and (max-width: 769px){

    }

    @media all and (max-width: 481px){
        width:auto;
    }

    @media all and (max-width: 320px){
        
    }
`

const AboutMeHeader = styled(motion.div)`
    z-index: 5;
    font-weight:700;

    @media all and (max-width:1024px){
        font-size:2rem;
    }

    @media all and (max-width: 769px){

    }

    @media all and (max-width: 481px){
       
    }

    @media all and (max-width: 320px){
        
    }
`

const AboutMeHeaderBorder = styled(motion.div)`
    
    border-bottom:2px solid black;
    

    @media all and (max-width: 1024px){
        font-size: 1rem;
    }

    @media all and (max-width: 769px){

    }

    @media all and (max-width: 481px){
        width: 90%;
        margin-left:auto;
        margin-right:auto;
    }

    @media all and (max-width: 320px){
        
    }
`

const AboutMeText1 = styled(motion.div)`
    font-size:1.5rem;
    letter-spacing:1px;
    z-index:10;
    text-indent:50px;

    @media all and (max-width: 1024px){
        font-size: 1rem;
    }

    @media all and (max-width: 769px){

    }

    @media all and (max-width: 481px){
        font-size:0.8rem;
        margin-top:-30px;
    }

    @media all and (max-width: 320px){
        
    }


`

const AboutMeBtnLink = styled(Link)`
    z-index:5;
    width:0;
    
`

const AboutMeButton = styled(motion.button)`
margin: 0 95px;
height:5rem;
width:20rem;
border:2px solid black;
font-size:1.5rem;
font-weight:700;
letter-spacing:0.8px;
color:white;
background-color:black;
border-radius:16px;


font-family: 'Poppins', sans-serif;

&:hover{
    background-color:transparent;
    border:2px solid #1E1E1E;
    color:#1E1E1E;
    transition: 0.15s ease-in-out;
}

@media all and (max-width:1024px){
    width:15rem;
    font-size:1.2rem;
}

@media all and (max-width: 769px){

}

@media all and (max-width: 481px){
   height:4rem;
   width:10rem;
   font-size:0.8rem;
}

@media all and (max-width: 320px){
    
}
`

const AboutMeColumn = styled(motion.div)`
    height: 36rem;
    width: 50%;

    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:start;
`



//--------------------------------------------------WallPaper---------------------------------------------//




const FullRedCircle = styled(motion.img)`
    position:fixed;
    height: 100%;
    width:100%;
    min-height:100px;
    max-height:100px;
    min-width:100px;
    max-width:10px;
    margin-top:20px;
    margin-left:370px;

    z-index:-1;
`



const FilledYellowRectangle = styled(motion.img)`
    position:fixed;

    min-width:900px;
    max-width:900px;
    min-height:140px;
    max-height:140px;

    margin-left:800px;
    margin-top: 50px;

    z-index:-1;
`

const NodeLogo = styled(motion.img)`
 position:fixed;

 min-width:350px;
 max-width:350px;
 min-height:300px;
 max-height:300px;

 margin-left:110px;
 margin-top:630px;

`


const JavaScriptLogo = styled(motion.img)`
position:fixed;

height:100%;
width:100%;

min-height:250px;
max-height:250px;
min-width:250px;
max-width:250px;
border-radius:10px;

margin-top:580px;
margin-left:1600px;
`



const BlueCircle = styled(motion.img)`
    position:fixed;

    height:100%;
    width:100%;

    max-height: 250px;
    min-height: 250px;
    max-width: 250px;
    min-width: 250px;

    margin-top:370px;
    margin-left:40px;
`

const YellowPentagon = styled(motion.img)`
    position:fixed;

    height:100%;
    width:100%;

    min-height: 250px;
    max-height: 250px;
    min-width: 250px;
    max-width: 250px;

    margin-left:130px;
    margin-top:630px;
`

const ReactLogo = styled(motion.img)`
position:fixed;

height:100%;
width:100%;

min-height: 200px;
max-height: 200px;
min-width: 220px;
max-width: 220px;

margin-top:30px;
margin-left:30px;
`

const FramerMotionLogo = styled(motion.img)`
position:fixed;

height:100%;
width:100%;

min-height: 200px;
max-height: 200px;
min-width: 220px;
max-width: 220px;

margin-left:1650px;
margin-top: 280px;

`

const PurpleRectangle = styled(motion.img)`
    position:fixed;

    height:100%;
    width:100%;

    min-height: 100px;
    max-height: 100px;
    min-width: 300px;
    max-width: 300px;

    margin-top:700px;
    margin-left:1000px;

`


const About = () =>{

    const aboutExitAnimation={
        exit:{x:'100vw', transition:{duration:1} }
    }

    const fadeRight ={
        hidden:{opactiy: 0, x:-1600},
        visible:{opacity: 1, x:0}
    }

    const fullGreenSquare ={
        hidden:{opactiy: 0, x:600},
        visible:{opacity: 1, x:0}
    }
    
    const fullPurpleHexagon ={
        hidden:{opactiy: 0, x:600},
        visible:{opacity: 1, x:0}
    }


    const aboutHeader={
        hidden:{opacity:0,  },
        visible:{ opacity:1 }
    }

    const fadeUp={
        hidden:{opacity:0, y:1400 },
        visible:{ opacity:1, y:0 }
    }

    const yellowPentagon={
        hidden:{opacity:0, y:1400 },
        visible:{ opacity:1, y:0 }
    }

    const purpleRectangle={
        hidden:{opacity:0, y:1400 },
        visible:{ opacity:1, y:0 }
    }

    const fullRedCircle={
        hidden:{
            opacity:0,
            y:-300
        },
        visible:{
            opacity:1,
            y:0
        }
    };

    const filledYellowRectangle={
        hidden:{
            opacity:0,
            y:-500
        },
        visible:{
            opacity:1,
            y:0
        }
    };

    const fullBlueTriangle = {
        hidden:{
            opacity:0,
            x:-900
        },
        visible:{
            opacity:1,
            x:0
        }
    }

    const blueCircle = {
        hidden:{
            opacity:0,
            x:-900
        },
        visible:{
            opacity:1,
            x:0
        }
    }

    return(
        <MainContainer variants={aboutExitAnimation} exit="exit" >
            {/* <FullRedCircle
             src={fullredcircle}
             initial='hidden'
             animate='visible'
             variants={fullRedCircle}
             transition={{ duration: 0.8 }}
            /> */}

            {/* <BlueRectangle
             src={bluerectangle}
            />  */}
            
            {/* <FilledYellowRectangle
             src={filledyellowrectangle}
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.1 }}
             variants={filledYellowRectangle}
            />

            <JavaScriptLogo style={{ rotate:'-5deg'}}
             src={javascriptlogo}
             initial='hidden'
             animate='visible'
             variants={fullGreenSquare}
             transition={{ duration: 1 }}
            />

            <BlueCircle
             src={bluecircle}
             initial='hidden'
             animate='visible'
             variants={blueCircle}
             transition={{ duration: 0.9 }}
            />

            <NodeLogo style={{ rotate:'15deg'}}
             src={node}
             initial='hidden'
             animate='visible'
             variants={yellowPentagon}
             transition={{ duration: 1 }}
            />

            <ReactLogo
             src={reactlogo}
             initial='hidden'
             animate='visible'
             variants={fullBlueTriangle}
             transition={{ duration: 0.7 }}
            />

            <FramerMotionLogo style={{ rotate:'5deg'}}
             src={framer}
             initial='hidden'
             animate='visible'
             variants={fullPurpleHexagon}
             transition={{ duration: 1 }}
            />

            <PurpleRectangle
             src={purplerectangle}
             initial='hidden'
             animate='visible'
             variants={purpleRectangle}
             transition={{ duration: 1.2 }}
             
            /> */}
            <AboutWrapper className='bg-primary'>
                <AboutMeHeader className='display-1'  
                 initial='hidden'
                 animate='visible'
                 transition={{duration:1.5 }}
                 variants={aboutHeader}
                > 
                    About Me
                </AboutMeHeader>

                <AboutMeHeaderBorder className='mb-5'
                 initial='hidden'
                 animate='visible'
                 variants={fadeRight}
                 transition={{duration:1.3}}
                />



                <AboutMeColumn className='bg-warning'>

               
                <AboutMeText1 
                 className=' pb-4'
                 initial='hidden'
                 animate='visible'
                 transition={{ duration:1.7 , type:'spring', bounce: 0.25 }}
                 variants={fadeUp}
                >

                My name is Andrew Furlong and I'm a self taught Web Developer. 
                
                I've always had an interest and passion for technology and learning.

                I love to solve problems and create amazing applications and user experiences!              
                </AboutMeText1>

                <AboutMeText1
                 className=' pb-5  '
                 initial='hidden'
                 animate='visible'
                 transition={{ duration:1.7 , type:'spring', bounce: 0.25 }}
                 variants={fadeUp}
                >
                    My skills post graduation from Ithaca College have allowed me to develop a strong work ethic and a vast network to allow me to undertake any project or problem. 

                    I work with local businesses to create or expand their online presence for their clients.

                    When I am not developing websites and applications you can find me watching a sports game or on a walk with my dog, Woodie.   
                </AboutMeText1>

                <AboutMeBtnLink to='/projects' >
                <AboutMeButton   className='shadow'
                    initial='hidden'
                    animate='visible'
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                    whileTap={{ scale: 1, transition:{duration: 0.01 }}}
                    transition={{ duration: 1 }}
                >
                    Check Out My Work
                </AboutMeButton>
                </AboutMeBtnLink>
                </AboutMeColumn>

            </AboutWrapper>
        </MainContainer>
    );
}

export default About;