import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center"> Welcome </h1>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Type your name"
              onChange={this.props.onChange}
            />
            <button
              onClick={this.props.handleInput}
              type="submit"
              className="btn btn-primary"
              to="./Questions"
            >
              Start Questionaire
            </button>
          </div>
        </form>
        <a href="./Questions">To Questionaire</a>
      </div>
    );
  }
}

export default Welcome;
