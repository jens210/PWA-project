import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { input: [] };
  }

  render() {
    return (
      <div className="container hero is-primary">
        <form>
          <h1 className="title text-center"> Welcome </h1>
          <h2 className="subtitle">
            - We strongly encourage you to fill our this form before every visit
          </h2>
          <div className="form-group">
            <input
              name="nickname"
              required
              type="text"
              className="form-control input"
              placeholder="Type your name"
              onChange={this.props.onChange}
            />
            {/* <button
              onClick={this.props.handleInput}
              type="submit"
              className="btn btn-primary"
              to="./Questions"
            >
              Start Questionaire
            </button> */}
          </div>
        </form>
       {/* <button className="next"> */}
          <Link
          className="button is-primary"
            to={{
              pathname: `/Questionnaire`,
              state: { nickname: this.state.nickname },
            }}
          >
            {' '}
            Start questionnaire
          </Link>
      {/*  </button> */}
      </div>
    );
  }
}

export default Welcome;
