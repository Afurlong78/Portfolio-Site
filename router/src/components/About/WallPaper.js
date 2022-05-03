import styled from 'styled-components';
import React from 'react';
import { motion } from 'framer-motion';


export const PurpleSquare = styled(motion.div)`
    position:fixed;

    top:100px;
    left:50px;

    height:100px;
    width:100px;

    border:4px solid #C9C5FF;

    z-index:-1;

    @media all and (max-width:1024px){
        display:none;
    }
`

export const BlueSquare = styled(motion.div)`
    position:fixed;

    top:800px;
    left:900px;

    height:200px;
    width:200px;

    border:4px solid #8FA9FF;

    z-index:-1;

    @media all and (max-width:1024px){
        display:none;
    }
`

export const YellowRectangle = styled(motion.div)`
    position:fixed;

    top:400px;
    left:50px;

    height:500px;
    width:50px;

    border:2px solid #FAFF5D;

    z-index:-1;

    @media all and (max-width:1024px){
        display:none;
    }
`

export const RedRectangle = styled(motion.div)`
    position:fixed;

    top:70px;
    left:1680px;

    height:550px;
    width:50px;

    border:6px solid #FF8196;

    z-index:-1;

    @media all and (max-width:1024px){
        display:none;
    }
`

export const BlueCircle = styled(motion.div)`
    position:fixed;

    top:650px;
    left:1550px;

    height:300px;
    width:300px;
    border-radius:50%;

    border:6px solid #A1FFF9;

    z-index:-1;

    @media all and (max-width:1024px){
    display:none;
    }
`









