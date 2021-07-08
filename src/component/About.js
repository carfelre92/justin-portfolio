import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const About = (props) => {

    const { aaa, bbb, ccc } = props;
    const [expertise, setExpertise] = useState(['Lorem', 'Ipsum','Dolor','Sit','Amet','Consectetur']);
    console.log(props)

    return (


        <div className="section2">
            <Container className="about-page">
                <Row>
                    <Col xs={12} className="about-me">
                        <div className="about-me-container">
                            <div className="about-me-photo-container">
                                <div className="img-gradient-container">
                                    <img src="/images/aboutme-image/1.jpg" className="image" alt="" />
                                </div>
                                <div className="about-image-text">
                                    <h2>About Me</h2>
                                </div>
                            </div>
                            <div className="about-me-paragraph-container">
                                <div className="about-me-paragraph">
                                    <h2>Hi, Im Justin</h2>
                                    <h3>Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="about-expertise">
                        <div className="about-expertise-container">
                            <div className="about-expertise-photo-container">
                                <div className="img-gradient-container">
                                    <img src="/images/aboutme-image/1.png" className="image" alt="" />
                                </div>
                                <div className="about-expertise-text">
                                    <h2>My Expertise</h2>
                                </div>
                            </div>
                            <div className="about-expertise-paragraph-container">
                                <div className="about-expertise-paragraph">
                                    {expertise.map((data) => (
                                        <h3>{data}</h3>)
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default About;