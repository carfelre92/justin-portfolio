import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsList } from "react-icons/bs";

export const Header = (props => {



    return (
        <header>
            <Container>
                <Row>
                    <Col xs={12} className="nav-bar">
                        <img className="nav-logo-image" src="/images/other-image/Justin-logo.png" alt="" />
                        <div className="nav-icon">
                            <BsList />
                        </div>
                        <div className="nav-list">
                            <ul>
                                <li><a class="active" href="">About Me</a></li>
                                <li><a href="">Projects</a></li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header>
    )

})

export default Header