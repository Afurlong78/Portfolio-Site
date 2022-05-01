import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
    overflow:hidden;
    overflow-y:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ContentContainer = styled(motion.div)`
    height:100vh;
    width:70%;

    margin-top:-60px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;

    @media all and (max-width:1550px){
        height:100%;
        justify-content:start;
    }

    @media all and (max-height:805px){
        height:100%;
    }

`



const Styled = {
    MainContainer,
    ContentContainer
}

export default Styled;