import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { input: [] };
  }

  render() {
    return (
      <div className="full-page">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcome</h1>
              <h2 className="subtitle">
                - We strongly encourage you to fill our this form before every
                visit
              </h2>
            </div>
          </div>
          <form className="container is-info">
            <div className="form-group">
              <input
                name="nickname"
                required
                type="text"
                className="form-control input  is-large"
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
          <br />
          <br />
          {/* <button className="next"> */}
          <Link
            className={'container button is-success is-large'}
            to={{
              pathname: `/Questionnaire`,
              state: { nickname: this.state.nickname },
            }}
            disabled={this.props.nickname.length < 1 ? true : false}
          >
            Start questionnaire
          </Link>
          {/*  </button> */}
        </section>
      </div>
    );
  }
}

export default Welcome;
