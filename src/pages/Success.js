import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div className="container success">
      <br />
      <br />
      <br />

        <h1>
          <span role="img" aria-label="success">
            🙌
          </span>
          Success
          <span role="img" aria-label="success">
            🙌
          </span>
        </h1>
        <br />
        <br />
        <br />

        <h2>
          {this.props.answers.nickname}
          <br />
          Thank you for your donation
        </h2>
      </div>
    );
  }
}

export default Success;
