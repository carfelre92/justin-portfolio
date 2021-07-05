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
          <Container>
            <Row>
              <Col>
                <div className="random">
                  <h1>ahoy!</h1>
                </div>
              </Col>
              <Col>2 of 2</Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        </div>{/* section1 */}


      </div>
    );
  }
}

export default App;
