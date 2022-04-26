import React, {useState} from 'react';
import styled from 'styled-components'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, Link } from 'react-router-dom';
import AboutMe from './About';

const CustomNav = styled(motion.Navbar)`
    background-color:#1E1E1E;
    color:white;
    display:flex;
    flex-direction: row;
    align-items:center;
    height:60px;
    
`
const NavLinks = styled(motion.NavLink)`
    color:white;
    font-family: 'Poppins', sans-serif;
    letter-spacing:1px;
    font-weight:100;
  
    @media all and (max-width: 800px){
        display:none;
    }
    
`

const NavRouterLink = styled(Link)`
    color:white;
    text-decoration:none;
    display:flex;
    justify-content:center;
    position:relative;
    letter-spacing:0.8px;

    @media all and (max-width: 800px){
    display:none;
    }

    &::after{
        content: "";
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        height:1.5px;
        background:white;

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.2s ease-in;
    }

    &:hover::after{
        transform: scaleX(1);
        transform-origin: left;
    }
    
    z-index:1;
`

const MobileNavRouterLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 4rem;
    width: 9rem;
    padding: ;
    color:white;
    text-decoration:none;
    border-radius:10px;
    background-color:black;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;

    &:hover{
        background-color:white;
        color:black;
    }

`


const NavLogo = styled(motion.NavbarText)`
    color:white;
    position:fixed;
    font-family: 'Poppins', sans-serif;
    font-size:2rem;
    margin-left:120px;
    font-weight:700;

    @media all and (max-width:700px){
        display:none;
    }
`

const NavDropDown = styled(motion.Button)`
    border:none;
    background-color:transparent;
    color:white;
    font-size:2rem;
    display:none;
    z-index:1000;

    @media all and (max-width: 800px){
        display:block;
    }
`
const SideBar = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width:60%;
  background-color: #1E1E1E;
  color:white;
  position:fixed;
  top:0;
  right:0;
  z-index:999;

  @media all and (min-width: 800px){
    display:none;
 }
`

const NavBrandContainer = styled(motion.div)`
    height:50px;
    width:50px;
    border:2px solid white;
    border-radius:100%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    
`



const MyNav = () =>{

    const [isOpen, setIsOpen]=useState(false);

    const dropDown={
        hidden:{opacity:0, y:-100},
        visible:{opacity: 1, y:0}
    }

    const fadeLeft={
        hidden:{ opacity: 0, x:-600},
        visible:{ opacity: 1, x: 0 }
    }

    const fadeRight={
        hidden:{opacity: 0, x:100},
        visible:{opacity: 1, x:0 }
    }

    const mobileNavVariant = {
        hidden:{
            x:1000
        },
        visible:{
            x:0
        },
        exit:{
            x:1000
        }
    }

    return(
        <div>
        <CustomNav className='shadow navbar-fixed-top'
         initial='hidden'
         animate='visible'
         transition={{ duration: 0.5 }}
         variants={dropDown}
        >
            
            <NavLogo className=''
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.6 }}
             variants={fadeLeft}
            >
                Andrew Furlong
            </NavLogo>

            <NavBrandContainer className='ms-5'
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.6 }}
             variants={fadeLeft}
            >
                Af
            </NavBrandContainer>

            <Nav className="ms-auto">
            
            <NavRouterLink to='about' className='me-4'>
            <NavLinks
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.75 }}
             variants={dropDown}
            > <strong>About</strong>
            </NavLinks>
            </NavRouterLink>

            <NavRouterLink to='projects' className="me-4">
            <NavLinks 
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.5 }}
             variants={dropDown}
            >
            <strong>Projects</strong> 
            </NavLinks>
            </NavRouterLink>

            <NavRouterLink to='projects' className="me-4">
            <NavLinks 
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.25 }}
             variants={dropDown}
            >
            <strong>Resume</strong>
            </NavLinks>
            </NavRouterLink>

            <NavRouterLink to='contact' className="me-4">
            <NavLinks 
             initial='hidden'
             animate='visible'
             transition={{ duration: 1 }}
             variants={dropDown}
            >
            <strong>Contact</strong>
            </NavLinks>
            </NavRouterLink>

            <NavRouterLink to="/" className='me-5'>
            <NavLinks 
             initial='hidden'
             animate='visible'
             transition={{ duration: 0.75 }}
             variants={dropDown}
            >
            <strong>Home</strong> 
            </NavLinks>
            </NavRouterLink>

            </Nav>

            <NavDropDown 
             onClick={()=>{setIsOpen(!isOpen)}}
             className='pb-2 me-5 ps-5 nav-toggle' 
             initial='hidden'
             animate='visible'
             transition={{ duration: 1.5 }}
             variants={fadeRight}
            ><IoMenu /></NavDropDown>

            <AnimatePresence exitBeforeEnter>
            {isOpen && 
                <SideBar
                 initial='hidden'
                 animate='visible'
                 exit='exit'
                 key={isOpen}
                 transition={{ duration: 0.75 }}
                 variants={mobileNavVariant}
                >
                <MobileNavRouterLink to="/about" className='mb-2 mt-2'>
                    About
                </MobileNavRouterLink>
                <MobileNavRouterLink to="/projects" className='mb-2 mt-2'>
                    Projects
                </MobileNavRouterLink>
                <MobileNavRouterLink to="/projects" className='mb-2 mt-2'>
                    Resume
                </MobileNavRouterLink>
                <MobileNavRouterLink to="/contact" className='mb-2 mt-2'>
                    Contact
                </MobileNavRouterLink>
                <MobileNavRouterLink to="/" className='mb-2 mt-2'>
                    Home
                </MobileNavRouterLink>
                
                </SideBar>}
            </AnimatePresence>

        </CustomNav>
        </div>
    );
}

export default MyNav;