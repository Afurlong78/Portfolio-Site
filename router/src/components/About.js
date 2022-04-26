import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainContainer = styled(motion.div)`
    overflow:hidden;

    height:93vh;
    width:75%;

    margin:auto;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
`


const AboutMeBtnLink = styled(Link)`
    text-decoration:none;
`

const AboutMeBtn = styled(motion.button)`
height:5rem;
width:20rem;
border:2px solid black;
font-size:1.5rem;
font-weight:700;
letter-spacing:0.8px;
color:white;
background-color:black;
border-radius:16px;

display:flex;
align-items:center;
justify-content:center;

text-decoration:none;

font-family: 'Poppins', sans-serif;

&:hover{
    background-color:transparent;
    border:2px solid #1E1E1E;
    color:#1E1E1E;
    transition: 0.15s ease-in-out;
`

const AboutHeaderText = styled(motion.h1)`
    font-weight:700;
    font-family: 'Poppins', sans-serif;

`

const AboutHeaderTextBorder = styled(motion.div)`
    border:1px solid black;
    width:100%;
`

const AboutContentContainer = styled(motion.div)`
    height: 38rem;
    width:100%;


    display:flex;
    justify-content:space-between;

`

const AboutMeTextContainer = styled(motion.div)`
    height: 100%;
    width:60%;

    display:flex;
    justify-content:center;
    align-items:start;
    flex-direction:column;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    font-size:1.1rem;
`

const AboutMeSkillsContainer = styled(motion.div)`
    height: 100%;
    width:35%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`

const AboutMeSkillsHeader = styled(motion.h2)`
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;
`

const AboutMeSkillsHeaderBorder = styled(motion.div)`
    width:100%;
    border:1px solid black;
`

const AboutMeSkillsContent = styled.li`
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;
    font-size:1.3rem;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height:30rem;
`


//--------------------------------------------------WallPaper---------------------------------------------//




const About = () =>{

    const aboutExitAnimation={
        exit:{x:'100vw', transition:{duration:1} }
    }

    

    return(
        <MainContainer variants={aboutExitAnimation} exit="exit" >
            <AboutHeaderText className='display-1'>
                About Me
            </AboutHeaderText>
            <AboutHeaderTextBorder />
            <AboutContentContainer>
                <AboutMeTextContainer className=''>
                My name is Andrew Furlong and I've always been fascinated by technology and passionate about learning how to use it - for fun and to find ways to make work easier and life better.  These interests have drawn me to the field of web development.   I love to solve problems and create amazing applications and user experiences!
                    <br/>
                    <br/>
                Following graduation from Ithaca College I initially began work in the field of finance.  While that experience gave me useful insight into the business world, I found the work I was doing was not a good match with my creative interests.  Web development draws on a different set of skills, with problem solving, creativity and imagination as the key.  This pairs well with the strong work ethic and a vast network of resources that I have built as I taught myself the skills to become a web developer.  I bring all of these resources and experience to the task in working  with local businesses to create or expand their online presence for their clients.
                    <br/>
                    <br/>
                When I am not developing websites and applications you can find me watching a sports game or on a walk with my dog, Woodie.
                    <br/>
                    <br/>

                <AboutMeBtnLink to='/projects' className='mx-auto'>
                <AboutMeBtn 
                 whileHover={{ scale: 1.1, transition:{ duration: 0.2 } }}
                 whileTap={{ scale: 1, transition:{duration: 0.01 }}}
                 transition={{ duration: 1 }}
                > 
                    Check Out My Work
                </AboutMeBtn>
                </AboutMeBtnLink>

                </AboutMeTextContainer>

                <AboutMeSkillsContainer className=''>
                    <AboutMeSkillsHeader className='display-5'>
                        Skills
                    </AboutMeSkillsHeader>
                    <AboutMeSkillsHeaderBorder>
                        
                    </AboutMeSkillsHeaderBorder>
                    <AboutMeSkillsContent>
                        <div className='mb-4'>
                        Javascript
                        </div>
                        <div className='mb-4'>
                        HTML
                        </div>
                        <div className='mb-4'>
                        CSS
                        </div>
                        <div className='mb-4'>
                        React
                        </div>
                        <div className='mb-4'>
                        Styled-Components
                        </div>
                        <div className='mb-4'>
                        Bootstrap
                        </div>
                        <div className='mb-4'>
                        Framer Motion
                        </div>
                        <div className='mb-4'>
                        React-Redux
                        </div>
                    </AboutMeSkillsContent>
                </AboutMeSkillsContainer>
            </AboutContentContainer>
        
                
              

        </MainContainer>
    );
}

export default About;