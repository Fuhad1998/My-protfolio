import React from 'react';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import Homes from '../Homes/Homes';

const Home = () => {
    return (
        <div style={{backgroundColor: "#1C2833"}}>
            
            <Homes></Homes>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;