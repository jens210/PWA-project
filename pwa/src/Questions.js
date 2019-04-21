import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Boolean from './components/boolean';

export default class Questions extends Component {
  constructor() {
    // constructor(props) {
    super();
    this.state = {
      url: 'http://localhost:8080/',
      questions: [],
    };
  }

  componentDidMount() {
    this.fetchQuestions();
    console.log(this.state.questions);
  }
  // FETCH
  fetchQuestions() {
    const API_URL = 'http://localhost:8080/';

    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({ questions: data }))
      .catch(err => console.error(err));
  }

  render() {
    const timestamp = new Date().toLocaleString();

    const questions = this.state.questions;
    return (
      <div className="container">
        <p>{timestamp}</p>
        <h1 className="text-center">Questions ?!{this.props.handleInput}</h1>

        <form action="submit">
          {questions.map(q =>
            q.type === 'Boolean' ? (
              <Boolean questions={this.state.questions} />
            ) : (
              <p>Not Bool</p>
            )
          )}
          {/*TODO
          Move this button to the question component form. Then call the add function
          Remove Disabled
          */}
          <Link to={`/Succes`}>
            <button disabled className="btn btn-success" type="submit">
              Send questionaire
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
