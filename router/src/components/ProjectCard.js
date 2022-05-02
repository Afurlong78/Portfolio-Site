import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import nearFall from '../assets/Projects/NearFall.jpg';
import weather from '../assets/Projects/weather.jpg';
import guStakes from '../assets/ProjectCard3.PNG';
import omniFoods from '../assets/Projects/omnifoods.jpg';


const MainContainer = styled(motion.div)`
    height:93vh;
    width:100%;

    position: relative;

    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
`

const MainProjectContainer = styled(motion.div)`
    height:80%;
    width: 70%;

    margin:auto;
`

const ProjectHeaderText = styled(motion.h1)`
    font-weight:700;    
    font-family: 'Poppins', sans-serif;
`

const ProjectHeaderTextBorder = styled(motion.div)`
    border: 1px solid black;
    width: 100%;
`

const ProjectsContainer = styled(motion.div)`
    width:100%;
    height:40rem;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    margin:auto;

    
`

const ProjectCardBtnRow = styled(motion.div)`
    width:90%;
    display:flex;
    justify-content:start;
`

const ProjectCardBtn = styled(motion.a)`
    height:3rem;
    width:8rem;
    color:black;
    background-color:white;
    border:none;
    border-radius:10px;
    z-index:1;
    font-family: 'Poppins', sans-serif;
    font-weight:500;

    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;

    &:hover{
        color:black;
    }
`
const ProjectCardBtnIcon = styled(motion.a)`
    height:3rem;
    width:4rem;
    font-size:2rem;
    color:black;
    background-color:white;
    border:none;
    border-radius:10px;
    z-index:1;

    display:flex;
    align-items:center;
    justify-content:center;
    
    &:hover{
        color:black;
    }
`

//----------------------------------------------------------------//
const ProjectsRow = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width:100%;
    height:18rem;
`

const ProjectCard1 = styled(motion.div)`
    height:18rem;
    width:47%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;


    background-image: linear-gradient(hsla(0, 0%, 0%, 0.7), rgba(0, 0, 0, 0.6)), url(${nearFall});
    background-size: cover;
`

const ProjectCardTextHeader = styled(motion.h1)`
    color:white;
    font-family: 'Poppins', sans-serif;
`

const ProjectCardDescription = styled(motion.p)`
    color:white;
    font-family: 'Poppins', sans-serif;
`

const ProjectCard2 = styled(motion.div)`
    height:18rem;
    width:47%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)), url(${weather});
    background-size:cover;
`

const ProjectCard3 = styled(motion.div)`
    height:18rem;
    width:47%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.7)), url(${omniFoods});
    background-size:cover;
`

const ProjectCard4 = styled(motion.div)`
    height:18rem;
    width:47%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.7), rgba(0, 0, 0, 0.3)), url(${guStakes});
    background-size: cover;
`
//-----------------------------------------------------------------------------------------------------------//

const Circle =  styled(motion.div)`
    position:fixed;
    height:100px;
    width:100px;
    border-radius: 50%;

    background-color:red;
    top:100px;
    left:30px;

`
const Circle1 =  styled(motion.div)`
    position:fixed;
    height:100px;
    width:100px;
    border-radius: 50%;

    background-color:blue;
    top:400px;
    left:30px;

`

const Rectangle = styled(motion.div)`
    position:fixed;
    width: 100px;
    height: 200px;

    background-color:yellow;
    top:400px;
    left:1700px;
`


const Projects = () =>{

    const pageAnimation={
        exit:{
            x:`-100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }

    const leftVariant = {
        hidden: {
            opacity:0,


        },
        visible:{
            opacity:1,



        }
    }

    const rectangle = {
        hidden: {
            opacity:0,
            x:1300
        },
        visible:{
            opacity:1,
            x:0

        }
    }
    const circles = {
        hidden: {
            opacity:0,
            x:-1300


        },
        visible:{
            opacity:1,
            x:0


        }
    }

    const rightVariant = {
        hidden: {
            opacity:0,



        },
        visible:{
            opacity:1,


        }
    }
    
    return(
        <MainContainer 
         variants={pageAnimation}
         exit='exit'
        >
            <Circle
             initial='hidden'
             animate='visible'
             variants={circles}
             transition={{duration: 1}}
            />

            <Circle1
             initial='hidden'
             animate='visible'
             variants={circles}
             transition={{duration: 1}}
            />

            <Rectangle
            initial='hidden'
            animate='visible'
            variants={rectangle}
            transition={{duration: 1}}
            />




            <MainProjectContainer className=''>
                <ProjectHeaderText className='display-1'>
                    Projects & Resume
                </ProjectHeaderText>
                <ProjectHeaderTextBorder/>

                <ProjectsContainer>    

                    <ProjectsRow className=' mt-4 '>
                        <ProjectCard1 className='shadow'
                         initial="hidden"
                         animate="visible"
                         variants={leftVariant}
                         transition={{ duration: 1.2 }}
                         whileHover={{ scale: 1.05, transition:{ duration: 0.2 } }}
                        >
                            <ProjectCardTextHeader className='ms-3 mb-4 display-5'>
                                The NearFall
                            </ProjectCardTextHeader>
                            <ProjectCardDescription className='ms-3 mb-4 me-3'>
                            The NearFall Fishing is my first professional experience. I was brought onto this project to assist in developing the theme of the site and create the front end.
                                
                            </ProjectCardDescription>
                            <ProjectCardBtnRow>
                                <ProjectCardBtn className='ms-3'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                 href='https://www.nearfallfishingcharters.com/'
                                 target='_blank'
                                >
                                    <strong>View Project</strong>
                                </ProjectCardBtn>
                                <ProjectCardBtnIcon className='ms-5'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                 href='https://github.com/saltoriousSIG/nearFallFrontEnd'
                                 target='_blank'
                                >
                                    <BsGithub/>
                                </ProjectCardBtnIcon>
                            </ProjectCardBtnRow>
                        </ProjectCard1>

                        <ProjectCard2 className='shadow'
                         whileHover={{ scale: 1.05, transition:{ duration: 0.2 } }}
                         initial="hidden"
                         animate="visible"
                         variants={rightVariant}
                         transition={{ duration: 1.3 }}
                        >
                        <ProjectCardTextHeader className='ms-3 mb-4 display-5'>
                                Welcome Weather
                            </ProjectCardTextHeader>
                            <ProjectCardDescription className='ms-3 mb-4 me-3'>
                            Welcome Weather is an easy way to get a glimpse of weather so you are better prepared for your day.
                                
                            </ProjectCardDescription>
                            <ProjectCardBtnRow>
                                <ProjectCardBtn className='ms-3'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                >
                                    <strong>View Project</strong>
                                </ProjectCardBtn>
                                <ProjectCardBtnIcon className='ms-5'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                >
                                    <BsGithub/>
                                </ProjectCardBtnIcon>
                            </ProjectCardBtnRow>

                        </ProjectCard2>

                    </ProjectsRow>
                    <ProjectsRow >
                        <ProjectCard3 className='shadow'
                         initial="hidden"
                         animate="visible"
                         variants={leftVariant}
                         transition={{ duration: 1.4 }}
                         whileHover={{ scale: 1.05, transition:{ duration: 0.2 } }}
                        >

                            <ProjectCardTextHeader className='ms-3 mb-4 display-5'>
                                OmniFoods
                            </ProjectCardTextHeader>
                            <ProjectCardDescription className='ms-3 mb-4 me-3'>
                            Welcome Weather is an easy way to get a glimpse of weather so you are better prepared for your day.
                                
                            </ProjectCardDescription>
                            <ProjectCardBtnRow>
                                <ProjectCardBtn className='ms-3'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                >
                                    <strong>View Project</strong>
                                </ProjectCardBtn>
                                <ProjectCardBtnIcon className='ms-5'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                >
                                    <BsGithub/>
                                </ProjectCardBtnIcon>
                            </ProjectCardBtnRow>

                        </ProjectCard3>
                        <ProjectCard4 className='shadow'
                         whileHover={{ scale: 1.05, transition:{ duration: 0.2 } }}
                         initial="hidden"
                         animate="visible"
                         variants={rightVariant}
                         transition={{ duration: 1.5 }}
                        >
                            <ProjectCardTextHeader className='ms-3 mb-4 display-5'>
                                GUStakes
                            </ProjectCardTextHeader>
                            <ProjectCardDescription className='ms-3 mb-4 me-3'>
                            The NearFall Fishing is my first professional experience. I was brought onto this project to assist in developing the theme of the site and create the front end.
                                
                            </ProjectCardDescription>
                            <ProjectCardBtnRow>
                                <ProjectCardBtn className='ms-3'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                 href="https://gustakes.gg/"
                                 target='_blank'
                                >
                                    <strong>View Project</strong>
                                </ProjectCardBtn>
                                <ProjectCardBtnIcon className='ms-5'
                                 whileHover={{ scale: 1.15, transition:{ duration: 0.2 } }}
                                >
                                    <BsGithub/>
                                </ProjectCardBtnIcon>
                            </ProjectCardBtnRow>

                        </ProjectCard4>

                    </ProjectsRow>




                </ProjectsContainer>
            </MainProjectContainer> 
        </MainContainer>
    );
}

export default Projects;