import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FilledGreenTriangle = styled(motion.div)`
  position:fixed;
  top: 170px;
  left: 300px;

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 350px solid transparent;
  border-bottom: 350px solid #89E5A4;
`

export const FilledBlueCircle = styled(motion.div)`
  position:fixed;

  width:200px;
  height:200px;

  border-radius:50%;

  top:170px;
  left:900px;

  background: #7E94FF;
`

export const BlueRectangle = styled(motion.div)`
  position:fixed;

  top: 700px;
  left:700px;

  width: 700px;
  height: 80px;

  border: 10px solid #C9C5FF;
`

export const RedRectangle = styled(motion.div)`
  position:fixed;

  top:620px;
  left:80px;

  width: 300px;
  height:200px;

  border:6px solid #FF6A6A;
`

export const OrangeCircle = styled(motion.div)`
  position:fixed;

  width:150px;
  height:150px;

  border-radius:50%;

  border:8px solid #FFECBA;

  top:110px;
  left:70px;

`

export const YellowRectangle = styled(motion.div)`
  position:fixed;

  width:400px;
  height:500px;
 
  z-index:-2;

  border:4px solid #FBFF87;

  left: 600px;
  top: 160px;
`

export const PurpleRectangle = styled(motion.div)`
  position:fixed;

  width:70px;
  height:500px;

  border:4px solid #E06CF6;

  left: -40px;
  top: 30px;

`

export const FilledBlueTriangle = styled(motion.div)`
  position:fixed;

  top: 850px;
  left: 420px;

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 200px solid transparent;
  border-bottom: 200px solid #9AFFFC;
`

export const YellowCircle = styled(motion.div)`
  position:fixed;
  width:250px;
  height:250px;

  border-radius:50%;

  background: #FBFF87;

  top:850px;
  left:-60px;

`

export const LargeRedRectangle = styled(motion.div)`
  position:fixed;

  top: 135px;
  left:1000px;

  width: 700px;
  height: 50px;

  border: 8px solid #FFABAB;
`

export const LargeOrangeCircle = styled(motion.div)`
  position:fixed;

  top:300px;
  left:1400px;

  height:350px;
  width:350px;

  border-radius: 50%;

  background: #FFDD82;
`

export const FilledLightGreenTriangle = styled(motion.div)`
  position:fixed;

  top: 200px;
  left: 1250px;

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 150px solid transparent;
  border-bottom: 150px solid #65EFC0;
`

export const PinkSquare = styled(motion.div)`
  position:fixed;

  height: 150px;
  width: 150px;

  top: 130px;
  left:1770px;

  background: #F9C1FF;
`

export const BlueSquare = styled(motion.div)`
  position:fixed;

  top: 750px;
  left: 1600px;

  height: 300px;
  width: 300px;

  border:10px solid #4A4AFB;
`

export const FilledPurpleTriangle = styled(motion.div)`
  position:fixed;

  top: 450px;
  left: 1820px;

  height: 0;
  width: 0;

  border-right: 00px solid red;
  border-left: 200px solid transparent;
  border-bottom: 200px solid #A967FF;
`

export const RedCircle = styled(motion.div)`
  position:fixed;

  height: 300px;
  width: 300px;

  border-radius:50%;

  top: 800px;
  left: 1100px;

  border: 6px solid #FF6565;
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

