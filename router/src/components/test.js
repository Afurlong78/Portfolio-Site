import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import nearFall from '../assets/ProjectCard1.PNG';
import welcomeWeather from '../assets/ProjectCard2.PNG';
import guStakes from '../assets/ProjectCard3.PNG';
import omniFoods from '../assets/ProjectCard4.PNG';
import { BsGithub } from 'react-icons/bs';

/////////////////////////////////////////////////////////////

const MainProjectContainer = styled(motion.div)`
    height:65vh;
    width:75%;
    display:flex;
    flex-direction:column;
`

const CardWrapper = styled.div`
    perspective:350;
`


const ProjectHeaderTextRow = styled(motion.div)`
    display:flex;
    flex-direction: row;
    
`

const ProjectHeaderText = styled(motion.h2)`
    font-weight:700;
`

const ProjectContainer = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:25rem;
    width: 100%;
    margin:auto;
`

const ProjectHeaderTextBorder = styled(motion.div)`
    border-top:2px solid black;
    width:100%;
`

////////////////////////////////////////////////////////////

const MainContainer = styled(motion.div)`
    height:93vh;
    width:100%;
    margin:auto;
    overflow:hidden;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

const ProjectCard = styled(motion.div)`
    height:30rem;
    width:19rem;
    border-radius:10px;
    position:relative;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    background-color:#DCDCDC;

`

const ProjectCardInside = styled(motion.div)`
    height:29.5rem;
    width:18.5rem;
    border-radius:10px;
    position:relative;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    background-color:#EBEBEB;

`

const ProjectCardBgWrapper = styled(motion.div)`
    overflow:hidden;
    border-radius:10px;
    position:absolute;
    top:0;
    right:0;
    min-width:100%;
    min-height:100%;
`

const RectangleBg1= styled(motion.div)`
    height:5rem;
    width:30rem;

    position:absolute;
    top:20em;
    left:-10em;

    background:#FFFDBA;
`
const RectangleBg2= styled(motion.div)`
    height:5rem;
    width:30rem;

    position:absolute;
    top:20em;
    left:-10em;

    background:#8EE9E3;
`
const RectangleBg3= styled(motion.div)`
    height:5rem;
    width:30rem;

    position:absolute;
    top:20em;
    left:-10em;

    background:#FFC78F;
`
const RectangleBg4= styled(motion.div)`
    height:5rem;
    width:30rem;

    position:absolute;
    top:20em;
    left:-10em;

    background:#E1B2FF;
`

const ProjectCardBg1 = styled(motion.div)`
    height:25rem;
    width:25rem;

    position:absolute;
    top:-11em;
    right:-10em;

    border-radius:50%;
    background: #9B9EFF;
`



const ProjectCardBg2 = styled(motion.div)`
    height:25rem;
    width:25rem;

    position:absolute;
    top:-11em;
    right:-10em;

    border-radius:50%;
    background: #65EFC0;
`

const ProjectCardBg3 = styled(motion.div)`
    height:25rem;
    width:25rem;

    position:absolute;
    top:-11em;
    right:-10em;

    border-radius:50%;
    background: #FF8196;
`

const ProjectCardBg4 = styled(motion.div)`
    height:25rem;
    width:25rem;

    position:absolute;
    top:-11em;
    right:-10em;

    border-radius:50%;
    background: #FFC78F;
`

// CONTENT IN CARD
const CardHeaderTextContainer = styled(motion.div)`
    width: 95%;
    height: 3rem;;
    z-index:1;
    border-radius: 10px;
    padding:7px;

    background-color:rgba(255, 255, 255, 0.61);

    display:flex;
    justify-content:center;
    align-items:center;
`


const CardHeaderText = styled(motion.h1)`
    color:black;
    z-index:1;
    font-size:1.7rem;
    letter-spacing: 2px;
    font-weight:500;
   
   
`
const NearFallHeaderText = styled(motion.h1)`
    color:black;
    z-index:1;
    font-size:1.7rem;
    letter-spacing: 2px;
    font-weight:700;
    font-family: 'Ubuntu', sans-serif;
   
   
`

const ProjectCardImage = styled(motion.img)`
    height:8rem;
    width: 16rem;
    border-radius:10px;
    background-size:cover;
    z-index:1;
    
`

const CardTextWrapper = styled(motion.p)`
    font-size:1.1rem;
    font-weight:300;
    color:black;
    width:17rem;
    height:12rem;
    display:flex;
    justify-content:center;
    align-items:start;
    word-break: normal;
    z-index:1;
    padding:7px;
    text-indent:30px;
  
    border-radius:10px;
    background-color: rgba(255, 255, 255, 0.61);
`
const NearFallTextWrapper = styled(motion.p)`
    font-size:1.1rem;
    color:black;
    width:17rem;
    height:12rem;
    display:flex;
    justify-content:center;
    align-items:start;
    word-break: normal;
    z-index:1;
    padding:7px;
    text-indent:30px;
    font-family: 'Ubuntu', sans-serif;
  
    border-radius:10px;
    background-color: rgba(255, 255, 255, 0.61);
`
const ProjectCardBtnRow = styled(motion.div)`
    width:90%;
    display:flex;
    justify-content:space-around;
`

const ProjectCardBtn = styled(motion.a)`
    height:3rem;
    width:8rem;
    color:white;
    background-color:black;
    border:none;
    border-radius:10px;
    z-index:1;

    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;

    &:hover{
        border:1px solid black;
        background-color: white;
        color:black;
    }
`
const ProjectCardBtnIcon = styled(motion.a)`
    height:3rem;
    width:4rem;
    font-size:2rem;
    color:white;
    background-color:black;
    border:none;
    border-radius:10px;
    z-index:1;

    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        border:1px solid black;
        background-color: white;
        color:black;
    }
`



const Projects = () =>{

    const pageAnimation={
        exit:{
            x:`-100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }
    
    const cardAnimation = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1
        }
    }

    const nearFallVariant = {
        hidden:{
            opacity:0,
            x:-3000
        },
        visible:{
            opacity:1,
            x:0
        }
    }

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);


    return(
        <MainContainer 
         variants={pageAnimation}
         exit='exit'
        >
            <MainProjectContainer>
            <ProjectHeaderTextRow>
                    <ProjectHeaderText className='display-1'>
                        <strong>Projects & Resume</strong>
                    </ProjectHeaderText>
            </ProjectHeaderTextRow>

            <ProjectHeaderTextBorder className='mb-5 pb-5'/>

            <ProjectContainer className=''>
            
            <CardWrapper className=''>
            <ProjectCard className='shadow'
            variants={nearFallVariant}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1}}
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={ 0.16 }
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
            whileTap={{ cursor: "grabbing"}}
            >
                <ProjectCardInside>
                    <ProjectCardBgWrapper>
                        <ProjectCardBg1/>
                        <RectangleBg1 style={{ rotate: '25deg'}}/>
                    </ProjectCardBgWrapper>
                    <CardHeaderTextContainer className='shadow mb-3 mt-2'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.05 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     transition={{ duration: 1 }}
                    >
                    <NearFallHeaderText className='mt-2'>
                        <strong>The NearFall</strong>
                    </NearFallHeaderText>
                    </CardHeaderTextContainer>
                    <ProjectCardImage className='shadow'
                    src={nearFall}
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.05 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     transition={{ duration: 1 }}
                    />
                    <NearFallTextWrapper className='mt-3 shadow'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.05 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     transition={{ duration: 1 }}
                    >
                        The NearFall Fishing is my first professional experience. I was brought onto this project to assist in developing the theme of the site and create the front end.
                    </NearFallTextWrapper>
                    <ProjectCardBtnRow className='mb-3'>
                        <ProjectCardBtn className='shadow'
                         href='https://www.nearfallfishingcharters.com/'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.05 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <strong>View Projects</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='shadow'
                         href='https://github.com/saltoriousSIG/nearFallFrontEnd'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.05 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>
                
                </ProjectCardInside>
            </ProjectCard>
            </CardWrapper>

            <CardWrapper>
            <ProjectCard className='shadow'
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={ 0.16 }
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
            whileTap={{ cursor: "grabbing"}}
            >
                <ProjectCardInside>
                    <ProjectCardBgWrapper>
                        <ProjectCardBg2/>
                        <RectangleBg2 style={{ rotate: '25deg'}}/>
                    </ProjectCardBgWrapper>
                    <CardHeaderTextContainer className='shadow mb-3 mt-2'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     transition={{ duration: 1 }}
                    >
                    <CardHeaderText className='mt-2'>
                        <strong>Welcome Weather</strong>
                    </CardHeaderText>
                    </CardHeaderTextContainer>
                    <ProjectCardImage className='shadow'
                    src={welcomeWeather}
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     transition={{ duration: 1 }}
                    />
                    <CardTextWrapper className='mt-3 shadow'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    >
                    The NearFall Fishing charter is a business located in New jersey that provides a one of a kind fishing experience. The NearFalls experienced staff can 
                    </CardTextWrapper>
                    <ProjectCardBtnRow className='mb-3'>
                        <ProjectCardBtn className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <strong>View Projects</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>
                
                </ProjectCardInside>
            </ProjectCard>
            </CardWrapper>
            <CardWrapper>
            <ProjectCard className='shadow'
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={ 0.16 }
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
            whileTap={{ cursor: "grabbing"}}
            >
                <ProjectCardInside>
                    <ProjectCardBgWrapper>
                        <ProjectCardBg3/>
                        <RectangleBg3 style={{ rotate: '25deg'}}/>
                    </ProjectCardBgWrapper>
                    <CardHeaderTextContainer className='shadow mb-3 mt-2'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    >
                    <CardHeaderText className='mt-2'>
                        <strong>GUStakes</strong>
                    </CardHeaderText>
                    </CardHeaderTextContainer>
                    <ProjectCardImage className='shadow'
                    src={guStakes}
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    />
                    <CardTextWrapper className='mt-3 shadow'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    >
                    The NearFall Fishing charter is a business located in New jersey that provides a one of a kind fishing experience. The NearFalls experienced staff can 
                    </CardTextWrapper>
                    <ProjectCardBtnRow className='mb-3'>
                        <ProjectCardBtn className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         href="https://gustakes.gg/"
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <strong>View Projects</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>
                
                </ProjectCardInside>
            </ProjectCard>
            </CardWrapper>

            <CardWrapper className=''>
            <ProjectCard className='shadow'
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={ 0.16 }
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
            whileTap={{ cursor: "grabbing"}}
            >
                <ProjectCardInside>
                    <ProjectCardBgWrapper>
                        <ProjectCardBg4/>
                        <RectangleBg4 style={{ rotate: '25deg'}}/>
                    </ProjectCardBgWrapper>
                    <CardHeaderTextContainer className='shadow mb-3 mt-2'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    >
                    <CardHeaderText className='mt-2'>
                        <strong>Omni Foods</strong>
                    </CardHeaderText>
                    </CardHeaderTextContainer>
                    <ProjectCardImage className='shadow'
                    src={omniFoods}
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    />
                    <CardTextWrapper className='mt-3 shadow'
                     style={{ x, y, rotateX, rotateY }}
                     drag
                     dragElastic={ 0.16 }
                     dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                     whileTap={{ cursor: "grabbing"}}
                     initial='hidden'
                     animate='visible'
                     variants={cardAnimation}
                     transition={{ duration: 1 }}
                    >
                    The NearFall Fishing charter is a business located in New jersey that provides a one of a kind fishing experience. The NearFalls experienced staff can 
                    </CardTextWrapper>
                    <ProjectCardBtnRow className='mb-3'>
                        <ProjectCardBtn className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <strong>View Projects</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='shadow'
                         style={{ x, y, rotateX, rotateY }}
                         drag
                         dragElastic={ 0.16 }
                         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
                         whileTap={{ cursor: "grabbing"}}
                         initial='hidden'
                         animate='visible'
                         variants={cardAnimation}
                         transition={{ duration: 1 }}
                         whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>
                
                </ProjectCardInside>
            </ProjectCard>
            </CardWrapper>

            

            </ProjectContainer>
            </MainProjectContainer>
        </MainContainer>
    );
}

export default Projects;