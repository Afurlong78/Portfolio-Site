import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import AboutMe from "./About";
import Projects from './Projects';
import Contact from './Contact';

const AnimatedRoutes = () =>{

    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
         <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Hero/>}/>
          <Route path='about' element={<AboutMe/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
         </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;