import React, { useContext, useState } from 'react';
import { NavContext } from './NavContext';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";


const NavContainer = () => {

    const [isActive, setActive] = useContext(NavContext);
    const [isScrollHidden, setScrollHidden] = useContext(NavContext);
    const history = useHistory()

    const handleToggle = () => {
        setActive(!isActive);
    }

    const removeHide = () => {
        document.body.classList.remove('of-hide')
    }

    return (
        <div className={isActive ? "nav-menu" : "nav-menu menu-animate"}>
            <Container>
                <Row>
                    <Col xs={12} className="nav-bar">
                        <Link to="/">
                            <img className="nav-logo-image" src="/images/other-image/Justin-logo.png" alt="" />
                        </Link>
                        <div className="nav-cross">
                            <div className="cross-container">
                                <AiIcons.AiOutlineClose onClick={handleToggle} />
                            </div>
                        </div>
                    </Col>
                    <div className="nav-list">
                        <ul>
                            <Link to="/projects" onClick={removeHide}>
                                <li>Projects</li>
                            </Link>
                            <Link to="/about" onClick={removeHide}>
                                <li>About Me</li>
                            </Link>
                        </ul>
                    </div>
                    <Col xs={12}>
                        <div className="nav-social-container">
                            <a href="https://www.instagram.com/hagi093_/" className="social-icon" >
                                <FaIcons.FaInstagramSquare />
                            </a>
                            <a href="https://www.linkedin.com/in/justin-lee-b88a8715b/" className="social-icon">
                                <FaIcons.FaLinkedin />
                            </a>
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