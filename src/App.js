import { React, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import About from './component/About';
import Main from './component/Main';
import Projects from './component/Projects';
import ProjectDetail from './component/ProjectDetail';
import { ProjectProvider } from './component/ProjectContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // aaa: [
      //   {
      //     id: 1,
      //     content: 'Water plants',
      //     priority: 'Important',
      //   },
      //   {
      //     id: 2,
      //     content: 'Cook lunch',
      //     priority: 'Not Urgent',
      //   },
      // ],
      // bbb: 'oh my',
      // ccc: 11,
    }
  }

  render() {

    //var dayum = this.state
    //console.log(dayum)

    return (

      <div className="wrapper">
          <Router>
            <Switch>
              <Route
                path="/" exact
                component={() => <Main {...this.state} />} />
              <Route
                path="/about"
                component={() => <About {...this.state} />} />
              <ProjectProvider>
                <Route
                  path="/projects"
                  component={() => <Projects {...this.state} />} />
                <Route
                  path="/projectDetail/:id"
                  component={() => <ProjectDetail />} />
              </ProjectProvider>

              {/* <Route
              path="/menu"
              component={() => <NavContainer {...this.state} />} /> */}
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
