import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import Styled from '../Global/GlobalStyle';
import nearFall from './Assets/NearFall.jpg';
import weather from './Assets/weather.jpg';
import guStakes from './Assets/GUStakes1.PNG';
import betterBudget from './Assets/BetterBudget.jpg';

const NearFallCard = styled(motion.div)`
    height:18rem;
    width:50%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.7), rgba(0, 0, 0, 0.6)), url(${nearFall});
    background-size: cover;

    @media all and (max-width:1024px){
    width:100%;
    margin-bottom:20px;
    }
`

const WelcomeWeatherCard = styled(motion.div)`
    height:18rem;
    width:45%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.25)), url(${weather});
    background-size:cover;

    @media all and (max-width:1024px){
        width:100%;
        
    }
`

const BetterBudgetCard = styled(motion.div)`
    height:18rem;
    width:45%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.7)), url(${betterBudget});
    background-size:cover;

    @media all and (max-width:1024px){
        width:100%;
        margin-bottom:20px;
    }
`

const GUStakesCard = styled(motion.div)`
    height:18rem;
    width:50%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    border-radius:10px;

    background-image: linear-gradient(hsla(0, 0%, 0%, 0.7), rgba(0, 0, 0, 0.3)), url(${guStakes});
    background-size: cover;


    @media all and (max-width:1024px){
        width:100%;
        margin-bottom:40px;
    }
`

const ProjectCardTextHeader = styled(motion.h1)`
    color:white;
    font-family: 'Poppins', sans-serif;
    font-weight:700;
`

const ProjectCardDescription = styled(motion.p)`
    color:white;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;
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

const Projects = () =>{

    /* ANIMATIONS */

    const pageAnimation={
        exit:{
            x:`100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }

    const leftVariant = {
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
            x:1300
        },
        visible:{
            opacity:1,
            x:0
        }
    }

    const headerTextVariant = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1
        }
    }

    /* ANIMATIONS */

    return(
        <Styled.MainContainer className=''
         variants={pageAnimation}
         exit='exit'
        >
            <Styled.HeaderText className='display-1'
             initial='hidden'
             animate='visible'
             variants={headerTextVariant}
             transition={{ duration: 1 }}
            >
                Projects & Resume
            </Styled.HeaderText>
            <Styled.HeaderTextBorderBottom
             initial='hidden'
             animate='visible'
             variants={headerTextVariant}
             transition={{ duration: 1 }}
            />

            <Styled.ProjectsContentRow className='mt-5 mb-3'>

                <NearFallCard className='shadow'
                 whileHover={{scale:1.05, transition:{ duration: 0.2 }}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={leftVariant}
                >

                    <ProjectCardTextHeader className='ms-3 me-3'>
                        The NearFall 
                    </ProjectCardTextHeader>
                    <ProjectCardDescription className='ms-3 me-3'>
                    The NearFall Fishing is my first professional experience. I was brought onto this project to assist in developing the theme of the site and create the front end.
                    </ProjectCardDescription>
                    <ProjectCardBtnRow className='ms-3 me-3'>
                        <ProjectCardBtn
                         whileHover={{ scale:1.1 }}
                         href='https://www.nearfallfishingcharters.com/'
                         target='_blank'
                        >
                            <strong>View Project</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='ms-5'
                         whileHover={{ scale:1.1 }}
                         href='https://github.com/saltoriousSIG/nearFallFrontEnd'
                         target='_blank'
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>

                </NearFallCard>

                <WelcomeWeatherCard className='shadow'
                 whileHover={{scale:1.05, transition:{ duration: 0.2 }}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={leftVariant}
                >
                    <ProjectCardTextHeader className='ms-3 me-3'>
                        Welcome Weather
                    </ProjectCardTextHeader>
                    <ProjectCardDescription className='ms-3 me-3'>
                    Welcome Weather is an easy way to get a glimpse of weather so you are better prepared for your day.
                    </ProjectCardDescription>
                    <ProjectCardBtnRow className='ms-3 me-3'>
                        <ProjectCardBtn
                         whileHover={{ scale:1.1 }}
                        >
                        <strong>View Project</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='ms-5'
                         whileHover={{ scale:1.1 }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>

                </WelcomeWeatherCard>
            </Styled.ProjectsContentRow>

            <Styled.ProjectsContentRow className='mt-3 mb-5'>
                <BetterBudgetCard className='shadow'
                 whileHover={{scale:1.05, transition:{ duration: 0.2 }}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={rightVariant}
                >
                    <ProjectCardTextHeader className='ms-3 me-3'>
                        Better Budget
                    </ProjectCardTextHeader> 
                    <ProjectCardDescription className='ms-3 me-3'>
                    Welcome Weather is an easy way to get a glimpse of weather so you are better prepared for your day.
                    </ProjectCardDescription>
                    <ProjectCardBtnRow>
                        <ProjectCardBtn className='ms-3 me-3'
                         whileHover={{ scale:1.1 }}
                        >
                        <strong>View Project</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='ms-5'
                         whileHover={{ scale:1.1 }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>

                </BetterBudgetCard>
                <GUStakesCard className='shadow'
                 whileHover={{scale:1.05, transition:{ duration: 0.2 }}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={rightVariant}
                >
                    <ProjectCardTextHeader className='ms-3 me-3'>
                        GUStakes
                    </ProjectCardTextHeader>
                    <ProjectCardDescription className='ms-3 me-3'>
                    The NearFall Fishing is my first professional experience. I was brought onto this project to assist in developing the theme of the site and create the front end.
                    </ProjectCardDescription>
                    <ProjectCardBtnRow className='ms-3 me-3'>
                        <ProjectCardBtn
                         whileHover={{ scale:1.1 }}
                         href="https://gustakes.gg/"
                         target='_blank'
                        >
                        <strong>View Project</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon className='ms-5'
                         whileHover={{ scale:1.1 }}
                        >
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>

                </GUStakesCard>

            </Styled.ProjectsContentRow>

        </Styled.MainContainer>
    );
}

export default Projects;