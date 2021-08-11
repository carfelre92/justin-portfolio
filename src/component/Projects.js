import React, {} from 'react';
import { NavProvider } from './NavContext';
import { ProjectProvider } from './ProjectContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ProjectImage from './ProjectImage';
import NavContainer from './NavContainer';

export const Projects = () => {

    return (
        <div className="section3" >
            {document.body.classList.remove('of-hide')}
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