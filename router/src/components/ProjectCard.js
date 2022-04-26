import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import nearFall from '../assets/ProjectCard1.PNG';
import { BsGithub } from 'react-icons/bs';

const MainContainer = styled(motion.div)`
    height:93vh;
    width:80%;
    margin:auto;
    overflow:hidden;

    display:flex;
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

const ProjectCardBg = styled(motion.div)`
    height:25rem;
    width:25rem;

    position:absolute;
    top:-11em;
    right:-10em;

    border-radius:50%;
    background: #9B9EFF;

`

// CONTENT IN CARD

const CardHeaderText = styled(motion.h1)`
    color:black;
    z-index:1;
`

const ProjectCardImage = styled(motion.img)`
    height:8rem;
    width: 16rem;
    border-radius:10px;
    background-size:cover;
    z-index:1;
    border:1px solid white;
`

const CardTextWrapper = styled(motion.p)`
    font-size:1.1rem;
    color:black;
    width:17rem;
    height:10rem;
    display:flex;
    justify-content:center;
    align-items:start;
    word-break: normal;
    

    text-indent:30px;
`
const ProjectCardBtnRow = styled(motion.div)`
    width:90%;
    display:flex;
    justify-content:space-around;
`

const ProjectCardBtn = styled(motion.button)`
    height:3rem;
    width:8rem;
    color:white;
    background-color:black;
    border:none;
    border-radius:10px;
    z-index:1;

    &:hover{
        border:1px solid black;
        background-color: white;
        color:black;
    }
`
const ProjectCardBtnIcon = styled(motion.button)`
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


const TheProjectCard = () =>{

    const pageAnimation={
        exit:{
            y:'100vh',
            opacity:0,
            transition:{ duration: 1 }
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
            <ProjectCard className='shadow'
            style={{ x, y, rotateX, rotateY }}
            drag
            dragElastic={ 0.16 }
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0}}
            whileTap={{ cursor: "grabbing"}}
            >
                <ProjectCardInside>
                    <ProjectCardBgWrapper>
                        <ProjectCardBg/>
                    </ProjectCardBgWrapper>
                    <CardHeaderText className='mt-3'>
                        The NearFall
                    </CardHeaderText>
                    <ProjectCardImage
                    src={nearFall}
                    />
                    <CardTextWrapper>
                    The NearFall Fishing charter is a business located in New jersey that provides a one of a kind fishing experience. The NearFalls experienced staff can 
                    </CardTextWrapper>
                    <ProjectCardBtnRow className='mb-3'>
                        <ProjectCardBtn>
                            <strong>View Projects</strong>
                        </ProjectCardBtn>
                        <ProjectCardBtnIcon>
                            <BsGithub/>
                        </ProjectCardBtnIcon>
                    </ProjectCardBtnRow>
                
                </ProjectCardInside>
            </ProjectCard>
        </MainContainer>
    );
}

export default TheProjectCard;