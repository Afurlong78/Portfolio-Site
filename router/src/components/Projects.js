import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import Styled from './Global/GlobalStyle';
import nearFall from '../assets/Projects/NearFall.jpg';
import weather from '../assets/Projects/weather.jpg';
import guStakes from '../assets/ProjectCard3.PNG';
import betterBudget from '../assets/Projects/BetterBudget.jpg';

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
    width:95%;
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
        width:95%;
        
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
        width:95%;
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
        width:95%;
        margin-bottom:40px;
    }
`


const Projects = () =>{

    const pageAnimation={
        exit:{
            x:`100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }

    return(
        <Styled.MainContainer className=''
         variants={pageAnimation}
         exit='exit'
        >
            <Styled.HeaderText className='display-1'>
                Projects & Resume
            </Styled.HeaderText>
            <Styled.HeaderTextBorderBottom/>
            <Styled.ContentRow className='mb-3'>
                <NearFallCard className='shadow'
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >

                </NearFallCard>
                <WelcomeWeatherCard className='shadow'
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >

                </WelcomeWeatherCard>
            </Styled.ContentRow>
            <Styled.ContentRow className='mb-5'>
                <BetterBudgetCard className='shadow'
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >

                </BetterBudgetCard>
                <GUStakesCard className='shadow'
                 whileHover={{scale:1.1}}
                 whileTap={{scale:0.9}}
                >

                </GUStakesCard>
            </Styled.ContentRow>
        </Styled.MainContainer>
    );
}

export default Projects;