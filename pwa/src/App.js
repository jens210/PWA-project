import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Questionnaire from './pages/Questionnaire';
import Succes from './pages/Succes';
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // answers: [],
    };
    this.onChange = this.onChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addQuestionaire = this.addQuestionaire.bind(this);
  }

  API_URL = 'http://localhost:8080/answers';

  addQuestionaire(nickname, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
    const API_URL = 'http://localhost:8080/answers';
    // Posting JSON to API
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        nickname: nickname,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('Result of posting a new Questionaire:');
        console.log(json);
      });
  }

  // TODO
  handleInput(event) {
    event.preventDefault();
    console.log('Go to questionaire component and save the name');
    this.addQuestionaire(
      this.state.nickname,
      this.state.q1,
      this.state.q2,
      this.state.q3,
      this.state.q4,
      this.state.q5,
      this.state.q6,
      this.state.q7,
      this.state.q8,
      this.state.q9
    );
    console.log('handleInput: ' + event);
  }

  // TODO
  onChange(event) {
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value === "true");
    // console.log(event)
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
            <Route
              exact
              path={'/Questionnaire'}
              render={props => (
                <Questionnaire
                  {...props}
                  addQuestionaire={this.addQuestionaire}
                  onChange={this.onChange}
                  handleInput={this.handleInput}
                  answers={this.state}
                />
              )}
            />

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
