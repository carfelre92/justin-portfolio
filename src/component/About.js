import React, { useState, useEffect, useContext } from 'react';
import { NavProvider } from './NavContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import NavContainer from './NavContainer';

export const About = (props) => {

    const { aaa, bbb, ccc } = props;
    const [expertise, setExpertise] = useState(() => ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Consectetur']);
    // console.log(aaa)
    /////////////////////////////////
    // const updateExpertise = () => {
    //     setExpertise([...expertise, 'Hehey man']);
    //     console.log('clicked');
    // }

    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 768;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
    ///////////////////////////////

    return (
        <div className="section2">
            <NavProvider>
                <NavContainer />

                <Header />
            </NavProvider>
            <Container className="about-page">
                <div className="about-me">
                    <div className="about-me-container">
                        <Row className={`${isMobile ? "" : "flex-row-reverse"}`}>
                            <Col xs={12} sm={12} md={6} className="about-me-photo-container">
                                <div className="img-gradient-container">
                                    <img src="/images/aboutme-image/1.jpg" className="image" alt="" />
                                </div>
                                <div className="about-image-text">
                                    <h2>About Me</h2>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} className="about-me-paragraph-container">
                                <div className="about-me-paragraph">
                                    <h2>Hi, Im Justin</h2>
                                    <h3>Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="about-expertise">
                    <div className="about-expertise-container">
                        <Row>
                            <Col xs={12} sm={12} md={6} className="about-expertise-photo-container">
                                <div className="img-gradient-container">
                                    <img src="/images/aboutme-image/1.png" className="image" alt="" />
                                </div>
                                <div className="about-expertise-text">
                                    <h2>My Expertise</h2>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} className="about-expertise-paragraph-container">
                                <div className="about-expertise-paragraph">
                                    {expertise.map((data) => (
                                        <h3>{data}</h3>)
                                    )}
                                </div>
                            </Col>
                        </Row>
                        {/* <button onClick={updateExpertise}>asdasd</button> */}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default About;