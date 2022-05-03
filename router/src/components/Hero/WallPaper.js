import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';



export const TheFGT = styled(motion.div)`
  position:fixed;
  top:180px;
  left: 300px;

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 350px solid transparent;
  border-bottom: 350px solid #89E5A4;
`

export const Purplehexagon = styled(motion.img)`
 position:fixed;
 width:100%;
 height:100%;
 max-width: 200px;
 max-height: 200px;

 margin-top:120px;
 margin-left: 90px;
`

export const Yellowrectangle = styled(motion.img)`
 position:fixed;
 width:100%;
 height:100%;
 max-width: 520px;
 min-width: 520px;
 max-height: 520px;
 min-height: 520px;
 z-index:-2;

 margin-left: 600px;
 margin-top: 160px;
`


export const TheFBC = styled(motion.div)`
  position:fixed;
  width:100%;
  height:100%;
  max-width: 180px;
  max-height: 180px;
  border-radius:50%;

  top:180px;
  left:900px;

  background: #7E94FF;
`

export const Redrectangle = styled(motion.img)`
 overflow:hidden;
 position:absolute;
 position:fixed;
 width:100%;
 height:100%;
 max-width: 800px;
 min-width: 800px;
 max-height: 240px;
 min-height: 240px;
 z-index: -2;

 margin-top:100px;
 margin-left:700px;
`

export const Lightbluetriangle = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 450px;
max-height: 450px;


margin-top: 100px;
margin-left: 1350px;
`

export const Filledpinksquare = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 150px;
max-height: 150px;
z-index:10;

margin-top:130px;
margin-left: 1650px;
`

export const Filledorangepentagon = styled(motion.img)`
position:fixed;
width:100%;
height:100%;
max-width: 300px;
max-height:300px;

margin-top:600px;
margin-left:1600px;
z-index:1;
`


export const TheFBR = styled(motion.div)`
 position:fixed;

 top: 700px;
 left:700px;

 width: 700px;
 height: 80px;

 background: #C9C5FF;
`

export const Purplecircle = styled(motion.img)`
position:fixed;
width:100%;
height:100%
min-width:300px;
min-height:300px;
max-width: 300px;
max-height: 300px;

margin-top:590px;
margin-left:1250px;
`

export const TheRR = styled(motion.div)`
 position:fixed;

 top:620px;
 left:80px;

 width: 300px;
 height:200px;

 border:4px solid #FF6A6A;
`

//-------------------------------------------------------//
//------------------BOUNCING BALL------------------------//
//-------------------------------------------------------//

const PreviewContainer = styled.div`
  position:fixed;
  margin-top:340px;
  margin-left:70px;
  width: 10em;
  height: 22em;
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    //margin-right: 4em;
  }
`;

const AnimationContainer = styled.div`
  width: 100%;
  height: 17em;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform:translate(-46%, 0%)
`;

const GroundContainer = styled.div`
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
`;


const Ball = styled(motion.div)`
  width: 9em;
  height: 9em;
  border-radius: 50%;
  background-color: #00cec9;
  position:fixed;

  @media all and (max-width: 1750px){
      display:none;
  }
`;

//-------------------------------------------------------//
//------------------BOUNCING BALL------------------------//
//-------------------------------------------------------//

