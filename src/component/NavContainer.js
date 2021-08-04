import React, { useContext } from 'react';
import { NavContext } from './NavContext';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";


const NavContainer = () => {

    const [isActive, setActive] = useContext(NavContext);

    const handleToggle = () => {
        setActive(!isActive);
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
                                <RiIcons.RiFacebookBoxLine/>
                            </div>
                            <div className="social-icon">
                                <RiIcons.RiInstagramLine />
                            </div>
                            <div className="social-icon">
                                <RiIcons.RiLinkedinBoxLine />
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