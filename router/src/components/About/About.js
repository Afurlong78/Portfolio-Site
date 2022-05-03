import React from 'react';
import Styled from '../Global/GlobalStyle';
import { 
    PurpleSquare, 
    YellowRectangle, 
    BlueCircle, 
    RedRectangle,
    BlueSquare 
} from './WallPaper';

const About = () =>{

    /* ANIMATIONS */
    const pageAnimation={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{duration: 1 }
        },
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

    const fadeUp = {
        hidden:{
            opacity:0,
            y:500
        },
        visible:{
            opacity:1,
            y:0
        }
    }

    /* ANIMATIONS */

    return(
        <Styled.MainContainer
         variants={pageAnimation}
         initial='hidden'
         animate='visible'
         exit='exit'
         className=''
        >
            
            {/* BACKGROUND SHAPES */}
                <PurpleSquare 
                 style={{rotate:'25deg'}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={leftVariant}
                />
                <YellowRectangle 
                 style={{rotate:'-25deg'}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1.2 }}
                 variants={leftVariant}
                />
                <BlueCircle 
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1.1 }}
                 variants={rightVariant}
                />
                <RedRectangle 
                 style={{rotate:'15deg'}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1.3 }}
                 variants={rightVariant}
                />
                <BlueSquare 
                 style={{rotate:'25deg'}}
                 initial='hidden'
                 animate='visible'
                 transition={{duration: 1 }}
                 variants={fadeUp}
                 />
            {/* BACKGROUND SHAPES */}

            <Styled.HeaderText className='display-1'>
                About Me
            </Styled.HeaderText>
            <Styled.HeaderTextBorderBottom/>

            <Styled.ContentRow className='mb-5'>

                <Styled.DominantTextContentContainer className=''>
                My name is Andrew Furlong and I've always been fascinated by technology and passionate about learning how to use it - for fun and to find ways to make work easier and life better.  These interests have drawn me to the field of web development.   I love to solve problems and create amazing applications and user experiences!
                    <br/>
                    <br/>
                Following graduation from Ithaca College I initially began work in the field of finance.  While that experience gave me useful insight into the business world, I found the work I was doing was not a good match with my creative interests.  Web development draws on a different set of skills, with problem solving, creativity and imagination as the key.  This pairs well with the strong work ethic and a vast network of resources that I have built as I taught myself the skills to become a web developer.  I bring all of these resources and experience to the task in working  with local businesses to create or expand their online presence for their clients.
                    <br/>
                    <br/>
                When I am not developing websites and applications you can find me watching a sports game or on a walk with my dog, Woodie.
                    <br/>
                    <br/>

                    <Styled.PageBtnLink to='/projects'>
                    <Styled.PageBtn 
                     whileHover={{scale:1.2}}
                     whileTap={{scale:0.9}}
                    >
                        <strong>Check Out My Work</strong>
                    </Styled.PageBtn>
                    </Styled.PageBtnLink>

                </Styled.DominantTextContentContainer>

                <Styled.SubContentContainer className=''>

                    <Styled.SubHeaderText>
                        Skill Set
                    </Styled.SubHeaderText>

                    <Styled.SubHeaderTextBorderBottom/>
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
                </Styled.SubContentContainer>

            </Styled.ContentRow>

        </Styled.MainContainer>
    );
}

export default About;