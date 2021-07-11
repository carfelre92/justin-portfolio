import React, { useState, useContext } from 'react';
import { NavContext } from './NavContext';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ImCross } from "react-icons/im";
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";


const NavContainer = () => {

    const [isActive, setActive] = useContext(NavContext);

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (
        <div className={isActive ? "nav-menu" : "nav-menu menu-animate"}>
            {/* <button onClick={handleToggle}>Toggle class</button> */}
            <h1>{}</h1>
            <Container>
                <Row>
                    <Col xs={12} className="nav-bar">
                        <img className="nav-logo-image" src="/images/other-image/Justin-logo.png" alt="" />
                        <div className="nav-cross">
                            <div className="cross-container">
                                <ImCross onClick={handleToggle}/>
                            </div>
                        </div>
                    </Col>
                    <div className="nav-list">
                        <ul>
                            <Link to="/projects">
                                <li>Projects</li>
                            </Link>
                            <Link to="/about">
                                <li>About Me</li>
                            </Link>
                        </ul>
                    </div>
                    <Col xs={12}>
                        <div className="nav-social-container">
                            <div className="social-icon">
                                <RiFacebookBoxLine />
                            </div>
                            <div className="social-icon">
                                <RiInstagramLine />
                            </div>
                            <div className="social-icon">
                                <RiLinkedinBoxLine />
                            </div>
                        </div>
                    </Col>
                    <Col xs={7} className="by">
                        <h2>@Designed/Developed by Theodor Kim</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NavContainer