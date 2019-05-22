import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Questionnaire from './pages/Questionnaire';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import { Offline, Online } from 'react-detect-offline';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // answers: [],
      nickname: '',
      success: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addQuestionaire = this.addQuestionaire.bind(this);
  }

  addQuestionaire(
    nickname,
    q1,
    q2,
    q3,
    q4,
    q5,
    q5_detail,
    q6,
    q6_detail,
    q7,
    q8,
    q9,
    q9_detail
  ) {
    const API_URL = process.env.REACT_APP_URL;
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
        q5_detail: q5_detail,
        q6: q6,
        q6_detail: q6_detail,
        q7: q7,
        q8: q8,
        q9: q9,
        q9_detail: q9_detail,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(json => {
        console.log('Result of posting a new Questionaire:');
        console.log(json);
      })
      .then(updateSuccess => {
        this.setState({ success: true });
      });
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({ success: true }); // maybe

    this.addQuestionaire(
      this.state.nickname,
      this.state.q1,
      this.state.q2,
      this.state.q3,
      this.state.q4,
      this.state.q5,
      this.state.q5_detail,
      this.state.q6,
      this.state.q6_detail,
      this.state.q7,
      this.state.q8,
      this.state.q9,
      this.state.q9_detail
    );
  }

  // TODO
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
                  nickname={this.state.nickname}
                />
              )}
            />
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
                  success={this.state.success}
                  nickname={this.state.nickname}
                />
              )}
            />
            {/* ROUTE SUCCESS */}
            <Route
              exact
              path={'/Success'}
              render={props => (
                <Success
                  {...props}
                  addQuestionaire={this.addQuestionaire}
                  onChange={this.onChange}
                  handleInput={this.handleInput}
                  answers={this.state}
                  success={this.state.success}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
