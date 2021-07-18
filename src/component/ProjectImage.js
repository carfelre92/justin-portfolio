import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectContext } from './ProjectContext';
import { Link } from 'react-router-dom'
// import { Button } from 'bootstrap';

export const ProjectImage = () => {

    const [projectImage, setProjectImage] = useContext(ProjectContext);
    console.log(projectImage);

    return (
        <Container>
            <Row className="row-container">
                {projectImage.map((data) => (
                    <Col xs={6} lg={4} className="square" key={data._id}>
                        <div className="content">
                            <Link to={`projectDetail/${data._id}`}>
                                <img src={data.contentDetails[0]} alt=""></img>
                            </Link>
                        </div>
                    </Col>)
                )}
            </Row>
        </Container>
    )
}

export default ProjectImage;



