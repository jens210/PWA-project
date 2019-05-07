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
      answers: [],
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
      .then(response => console.log(response.json))
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
    this.setState({
      nickname: 'jack',

      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: true,
      q5_detail: 'Empty',
      q6: true,
      q6_detail: 'empty',
      q7: false,
      q8: false,
      q9: true,
      q9_detail: 'empty',
    });
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
