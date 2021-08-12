import { React, Component } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    fff(){
        return document.body.classList.remove('modal-open');
    }

    render() {
        this.fff()
        return (
            <div className="section1">
                <Container className="main-page">
                    <Row>
                        <Col className="">
                            <div className="main-page-name">
                                <h1>Justin Lee</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={7} className="">
                            <div className="main-page-paragraph">
                                <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                                <h3>consectetur adipiscing elit</h3>
                                <h3>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="btn-group">
                        <Link to="/projects">
                            <button className="main-page-button button1">PROJECTS</button>
                        </Link>
                        <Link to="/about">
                            <button className="main-page-button button2">ABOUT ME</button>
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Main;