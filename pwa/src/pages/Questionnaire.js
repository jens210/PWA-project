import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

import Q5detail from './Q5detail';
import Q6detail from './Q6detail';
import Q9detail from './Q9detail';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: this.props.nickname,
    };
  }

  //   var function = str2bool(value) {
  //     if (value && typeof value === 'string') {
  //       if (value.toLowerCase() === "true") return true;
  //       if (value.toLowerCase() === "false") return false;
  //     }
  //     return value;
  //  }
  handleSubmit(event) {
    this.props.addQuestionnaire(event);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleInput}>
          <div className="question" id="Q1">
            <p>Number of hours since last release</p>
            <input
              className="question_input"
              data-msg-required="Write number of hours"
              // required="required"
              type="text"
              name="q1"
              id="Q1_detail"
              placeholder="00"
              onChange={this.props.onChange}
            />
          </div>
          <div className="question" id="Q2">
            <p>Did you have a fever and/or did you visit a doctor?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q2"
                  value="true"
                  onChange={this.props.onChange}
                  checked={this.props.answers.q2 === 'true'}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q2"
                  value="false"
                  onChange={this.props.onChange}
                  checked={this.props.answers.q2 === 'false'}
                />
                <div className="check" />
              </label>
            </div>
          </div>
          <div className="question" id="Q3">
            <p>Did you have an unprotected sex with a new sexual partner?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q3"
                  value="true"
                  checked={this.props.answers.q3 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q3"
                  value="false"
                  checked={this.props.answers.q3 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
          </div>
          <div className="question" id="Q4">
            <p>Did you have sex with a prostitute since the last donation?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q4"
                  value="true"
                  checked={this.props.answers.q4 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q4"
                  value="false"
                  checked={this.props.answers.q4 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
          </div>
          <div className="question" id="Q5">
            <p>Do you plan to travel in near future?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q5"
                  value="true"
                  checked={this.props.answers.q5 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q5"
                  value="false"
                  checked={this.props.answers.q5 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
            {this.props.answers.q5 === 'true' ? <Q5detail /> : null}
          </div>
          <div className="question" id="Q6">
            <p>
              Have you recently been traveling outide the country, that you did
              not inform about?
            </p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q6"
                  value="true"
                  checked={this.props.answers.q6 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q6"
                  value="false"
                  checked={this.props.answers.q6 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
            <Q6detail onChange={this.props.onChange} />
          </div>
          <div className="question" id="Q7">
            <p>Did you get a new piercing, tattoo, or similar?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q7"
                  value="true"
                  checked={this.props.answers.q7 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q7"
                  value="false"
                  checked={this.props.answers.q7 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
          </div>
          <div className="question" id="Q8">
            <p>
              Do you have a genital wart, vaginal epithelium or a wound on your
              genitals?
            </p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q8"
                  value="true"
                  checked={this.props.answers.q8 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q8"
                  value="false"
                  checked={this.props.answers.q8 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
          </div>
          <div className="question" id="Q9">
            <p>Did you take any narcotics since the last donation?</p>
            <div className="radio">
              <label className="question_option_container">
                YES
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q9"
                  value={true}
                  checked={this.props.answers.q9 === 'true'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
              <label className="question_option_container">
                NO
                <input
                  className="question_option_input"
                  // data-msg-required="Choose one of the options"
                  // required="required"
                  type="radio"
                  name="q9"
                  value="false"
                  checked={this.props.answers.q9 === 'false'}
                  onChange={this.props.onChange}
                />
                <div className="check" />
              </label>
            </div>
            <Q9detail onChange={this.props.onChange} />
          </div>
          <button
            className="next"
            type="submit"
            // onClick={this.props.handleInput}
          >
            Send answers
          </button>
        </form>
      </div>
    );
  }
}

export default Questionnaire;
