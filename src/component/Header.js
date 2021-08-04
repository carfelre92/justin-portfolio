import React, { useContext, useState } from 'react';
import { NavContext } from './NavContext';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import * as FaIcons from 'react-icons/fa';

const Header = () => {

    const [isActive, setActive] = useContext(NavContext);
    const [isOpen, setOpen] = useState("false");
    const [isScrollHidden, setScrollHidden] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        setOpen(!isOpen);
        ooo();
        setScrollHidden(!isScrollHidden);
    }

    const ooo = () =>{
        return (isScrollHidden ? document.body.classList.add('of-hide') : document.body.classList.remove('of-hide'));
    }

    return (
        <header>
            <Container>
                <Row>
                    <Col xs={12} className="nav-bar">
                        <Link to="/">
                            <img className="nav-logo-image" src="/images/other-image/Justin-logo.png" alt="" />
                        </Link>
                        <div className={`${isOpen ? "nav-icon" : "nav-icon open"}`} onClick={handleToggle}>
                            {/* <FaIcons.FaBars onClick={handleToggle} /> */}
                            <span></span>
                            <span></span>
                            <span></span>
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