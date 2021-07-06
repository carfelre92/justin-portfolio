import React, { Component } from 'react';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import MetaTags from 'react-meta-tags';
import { Container, Row, Col } from 'react-bootstrap'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (

      <div className="wrapper">
        <header className="head">
        </header>

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
              <button className="main-page-button">PROJECTS</button>
              <button className="main-page-button">ABOUT ME</button>
            </div>
          </Container>
        </div>{/* section1 */}

      </div>
    );
  }
}

export default App;
