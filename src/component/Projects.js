import React, { useState, useEffect, useContext } from 'react';
import { NavProvider } from './NavContext';
import { ProjectProvider } from './ProjectContext';
import { ProjectContext } from './ProjectContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import ProjectImage from './ProjectImage';
import NavContainer from './NavContainer';

export const Projects = () => {

    const blah = () => {
        console.log('blah');
    }

    return (
        <div className="section3" >
            <NavProvider>
                <NavContainer />
                <Header />
            </NavProvider>
            <ProjectProvider>
                <ProjectImage />
            </ProjectProvider>
            <Footer />
        </div>
    )
}

export default Projects;