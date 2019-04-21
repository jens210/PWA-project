import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Questions from './Questions';
import Succes from './Succes';
import NotFound from './NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  API_URL = 'http://localhost:8080/';
  // API_URL = 'http://localhost:8080/questions';

  // TODO
  handleInput(event) {
    event.preventDefault();
    console.log('Go to questionaire component and save the name');
    /*
    this.addQuestionaire(
    );*/
  }

  // TODO
  onChange(event) {
    //console.log(event.target.value);
    /* this.setState({
       //[event.target.name]: event.target.value
     });*/
  }

  // TODO
  addQuestionaire() {
    // Posting JSON to API
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            {/* ROUTE WELCOME */}
            <Route
              exact
              path={'/'}
              render={props => (
                <Welcome
                  onChange={this.onChange}
                  handleInput={this.handleInput}
                />
              )}
            />
            {/*TODO route for question component */}
            {/* ROUTE QUESTIONS */}
            <Route exact path={'/Questions'} render={props => <Questions />} />

            {/* ROUTE SUCCESS */}
            <Route exact path={'/Succes'} render={props => <Succes />} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
