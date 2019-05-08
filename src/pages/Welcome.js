import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = { input: [] };
  }

  render() {
    return (
      <form>
        <h1 className="text-center"> Welcome </h1>
        <h2 className="subtitle">
          - We strongly encourage you to fill our this form before every visit
        </h2>
        <div className="form-group">
          <input
            name="nickname"
            required
            type="text"
            className="form-control"
            placeholder="Type your name"
            onChange={this.props.onChange}
          />
        </div>

        <Link
          className="button btn btn-info is-primary"
          to={{
            pathname: `/Questionnaire`,
            state: { nickname: this.state.nickname },
          }}
          disabled={this.props.nickname.length < 1 ? true : false}
        >
          {' '}
          Start questionnaire
        </Link>
      </form>
    );
  }
}

export default Welcome;
