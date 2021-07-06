import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import About from './component/About';
import Main from './component/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popper from 'popper.js';
import MetaTags from 'react-meta-tags';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
