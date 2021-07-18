import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ProjectContext } from './ProjectContext';
import { NavProvider } from './NavContext';
import Header from './Header';
import Footer from './Footer';
import NavContainer from './NavContainer';


export const ProjectDetail = () => {

    const { id } = useParams();
    const [projectImage, setProjectImage] = useContext(ProjectContext);

    const detail = projectImage.filter((data, index) => {
        return data._id == id;
    })

    console.log(detail);

    return (
        <div className='section4'>
            <NavProvider>
                <NavContainer />
                <Header />
            </NavProvider>

            {detail.map((data, index) =>
                <Container>
                    <Row className="row justify-content-center">
                        <Col xs={12} md={12} xl={8} className="col-image" key={index} >
                            <div className="img-container">
                                <img src={data.contentDetails[index]} alt=""></img>
                            </div>
                        </Col>
                        <Col xs={12} md={12} xl={4} className="col-width">
                            <div className="project-description">
                                <div className="description-wrap">
                                    <h3>{data.projectName}</h3>
                                    <h4>{data.projectDescription}</h4>
                                    <h4><span className="bold-text">Role : </span>{data.projectRole}</h4>
                                    <h4><span className="bold-text">Tools : </span>{data.tools}</h4>
                                    <h4><span className="bold-text">Client : </span>{data.client}</h4>
                                    <h4><span className="bold-text">Year : </span>{data.year}</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="image-container">
                        {data.contentDetails.slice(1).map((cd, index) =>
                            <Col xs={12} md={6} className="rest" key={index} >
                                <div className="img-rest">
                                    <img src={cd} alt=""></img>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            )}
            <Footer />
        </div >
    )
}

export default ProjectDetail;