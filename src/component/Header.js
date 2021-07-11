import React, { useState, useContext } from 'react';
import { NavContext } from './NavContext';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsList } from "react-icons/bs";

const Header = () => {
    
    const [isActive, setActive] = useContext(NavContext);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
            <header>
                <Container>
                    <Row>
                        <Col xs={12} className="nav-bar">
                            <img className="nav-logo-image" src="/images/other-image/Justin-logo.png" alt="" />
                            <div className="nav-icon">
                                <BsList onClick={handleToggle}/>
                            </div>
                            <div className="nav-list">
                                <ul>
                                    <Link to="/about">
                                        <li>About Me</li>
                                    </Link>
                                    <Link to="/projects">
                                        <li>Projects</li>
                                    </Link>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
    )
}

export default Header;