import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainContainer = styled(motion.div)`
    height:100%;
    width:70%;
   
    margin: 0 auto;
    margin-top:100px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

`

const HeaderText = styled(motion.h1)`
    font-weight:700;
    font-family: 'Poppins', sans-serif;
`

const SubHeaderText = styled(motion.h3)`
    font-weight:700;
    font-family: 'Poppins', sans-serif;
    margin-top:15px;
`

const HeaderTextBorderBottom = styled(motion.div)`
    width:100%;
    border:1px solid black;
`

const SubHeaderTextBorderBottom = styled(motion.div)`
    width:100%;
    border:1px solid black;
`

const ContentRow = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width:100%;

    @media all and (max-width:1024px){
        flex-direction:column;
    }
`

const SplitContentContainer = styled(motion.div)`
    height:40rem;
    width:45%;

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:1.1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;
`

const DominantContentContainer = styled(motion.div)`
    height:40rem;
    width:55%;

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:1.1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    
`
const DominantTextContentContainer = styled(motion.div)`
    height:fit-content;
    width:55%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    font-size:1.1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    margin-top:20px;

    @media all and (max-width:1024px){
        width:95%;
    }
`

const SubContentContainer = styled(motion.div)`
    height:40rem;
    width:35%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    font-size:1.3rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    @media all and (max-width:1024px){
        width:95%;
        margin-bottom:30px;
    }
`

const PageBtn = styled(motion.button)`
    height:5rem;
    width:15rem;

    background:black;
    border:none;
    color:white;
    font-family: 'Poppins', sans-serif;
    font-weight:500;

    border-radius: 10px;

    display:flex;
    justify-content:center;
    align-items:center;

    margin-bottom:25px;

    &:hover{
        border:2px solid black;
        background:transparent;
        color:black;
    }

    @media all and (max-width:1024px){
        margin-bottom:20px;
    }

`

const PageBtnLink = styled(Link)`
    text-decoration:none;
`



const About = () =>{

    const pageAnimation={
        exit:{
            x:`100vw`,
            opacity:0,
            transition:{duration: 1 }
        }
    }

    const btnVariant={

    }
    
    return(
        <MainContainer
         variants={pageAnimation}
         exit='exit'
         className=''
        >
            <HeaderText className='display-1'>
                About Me
            </HeaderText>
            <HeaderTextBorderBottom/>

            <ContentRow>

                <DominantTextContentContainer className=''>
                My name is Andrew Furlong and I've always been fascinated by technology and passionate about learning how to use it - for fun and to find ways to make work easier and life better.  These interests have drawn me to the field of web development.   I love to solve problems and create amazing applications and user experiences!
                    <br/>
                    <br/>
                Following graduation from Ithaca College I initially began work in the field of finance.  While that experience gave me useful insight into the business world, I found the work I was doing was not a good match with my creative interests.  Web development draws on a different set of skills, with problem solving, creativity and imagination as the key.  This pairs well with the strong work ethic and a vast network of resources that I have built as I taught myself the skills to become a web developer.  I bring all of these resources and experience to the task in working  with local businesses to create or expand their online presence for their clients.
                    <br/>
                    <br/>
                When I am not developing websites and applications you can find me watching a sports game or on a walk with my dog, Woodie.
                    <br/>
                    <br/>

                    <PageBtnLink to='/projects'>
                    <PageBtn 
                     whileHover={{scale:1.2}}
                     whileTap={{scale:0.9}}
                    >
                        <strong>Check Out My Work</strong>
                    </PageBtn>
                    </PageBtnLink>

                </DominantTextContentContainer>

                <SubContentContainer className=''>

                    <SubHeaderText>
                        Skill Set
                    </SubHeaderText>

                    <SubHeaderTextBorderBottom/>
                        <div className='mb-4'>
                        Javascript
                        </div>
                        <div className='mb-4'>
                        HTML
                        </div>
                        <div className='mb-4'>
                        Git
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
                </SubContentContainer>

            </ContentRow>

        </MainContainer>
    );
}

export default About;