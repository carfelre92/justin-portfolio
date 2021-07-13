import React, { useState, useEffect, useContext } from 'react';
import { NavProvider } from './NavContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import { ProjectContext } from './ProjectContext';

export const ProjectImage = () => {

    const [projectImage, setProjectImage] = useContext(ProjectContext);

    return (
        <Container>
            <Row className="row-container">
                {projectImage.map((data) => (
                    <Col xs={6} lg={4} className="square">
                        <div className="content">
                            <img src={data} alt=""></img>
                        </div>
                    </Col>)
                )}
            </Row>
        </Container>
    )
}

export default ProjectImage;



