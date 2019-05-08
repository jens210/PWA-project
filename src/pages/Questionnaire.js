import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import '../styles.css';

// import Q5detail from './Q5detail';
// import Q6detail from './Q6detail';
// import Q9detail from './Q9detail';
import Questions from './Questions';
import Success from './Success';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: this.props.nickname,
    };
  }

  handleSubmit(event) {
    this.props.addQuestionnaire(event);
  }

  render() {
    return (
      <div className="container">
        {this.props.success ? (
          <Success answers={this.props.answers} />
        ) : (
          <Questions
            answers={this.props.answers}
            nickname={this.props.nickname}
            addQuestionaire={this.props.addQuestionaire}
            onChange={this.props.onChange}
            handleInput={this.props.handleInput}
          />
        )}
      </div>
    );
  }
}

export default Questionnaire;
