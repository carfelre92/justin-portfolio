import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export const Footer = (props => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} className="footer-col-one">
                        <div className="first-container">
                            <div className="text">
                                <h2>CONTACT ME</h2>
                            </div>
                            <h2>021 222 1234</h2>
                            <h2>sample@example.com</h2>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="footer-col-two">
                        <div className="second-container">
                            <div className="empty"></div>
                            <div className="icon-container">
                                <div className="icon">
                                    <div>
                                        <FaFacebookSquare />
                                    </div>
                                    <div>
                                        <FaLinkedin />
                                    </div>
                                    <div>
                                        <FaInstagramSquare />
                                    </div>

                                </div>
                            </div>
                            <div className="text">
                                <h2>Designed/Developed by Theodor Kim</h2>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
})
export default Footer;