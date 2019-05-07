import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <div className="container success">
        <h1>
          <span role="img" aria-label="success">
            🙌
          </span>
          Success
          <span role="img" aria-label="success">
            🙌
          </span>
        </h1>
        <h2>
          {this.props.answers.nickname}  - check react dev tools
          <br />
          <br />
          <br />
          Your input are as following;
        </h2>
        <hr/>
        <p>Q1</p>
        {this.props.answers.q5 || true}
        {console.log('Q1', this.props.answers.q5)}

        {this.props.answers.q5_detail}
        {this.props.answers.q5}
        <p>Thank you for your donation!</p>

        <blockquote>Well.. a look into the props will reveal that they all are boolean. This means that we need a function to render some logic for the enduser</blockquote>
      </div>
    );
  }
}

export default Success;
