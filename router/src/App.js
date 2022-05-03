import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MyNav from './components/NavBar/NavBar';
import AnimatedRoutes from './components/Routes/AnimatedRoutes';

function App () {
  
  return(
    <Router>
      <MyNav/>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;