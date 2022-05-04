import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

    @media all and (max-width:1700px){
        width: 70%;
    }
`

const ContentRow = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;


    width:100%;

    @media all and (max-width:1700px){
        flex-direction:column;
    }
`

const ProjectsContentRow = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-top:20px;

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

    margin-top:40px;

    @media all and (max-width:1700px){
        width:95%;
    }
`

const SubContentContainer = styled(motion.div)`
    height:100%;
    width:35%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    font-size:1.3rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing:0.8px;

    @media all and (max-width:1700px){
        width:95%;
        height:50%;
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

    @media all and (max-width:1700px){
        margin-bottom:20px;
    }

`

const PageBtnLink = styled(Link)`
    text-decoration:none;
`



const Styled = {
    MainContainer,
    HeaderText,
    SubHeaderText,
    HeaderTextBorderBottom,
    SubHeaderTextBorderBottom,
    ContentRow,
    SplitContentContainer,
    DominantContentContainer,
    DominantTextContentContainer,
    SubContentContainer,
    PageBtnLink,
    PageBtn,
    ProjectsContentRow
}

export default Styled;