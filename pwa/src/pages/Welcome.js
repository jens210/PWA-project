import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { input: [] };
}

  render() {
    return (
      <div className="container">
        <form>
          <h1 className="text-center"> Welcome </h1>
          <div className="form-group">
            <input
              name="nickname"
              required
              type="text"
              className="form-control"
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
        <button className="next">  
          <Link to={{
            pathname: `/Questionnaire`, 
            state: { nickname: this.state.nickname}
          }}> Start questionnaire</Link> 
        </button>
      </div>
    );
  }
}

export default Welcome;
