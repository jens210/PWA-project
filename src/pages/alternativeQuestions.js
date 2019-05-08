import React, { Component } from 'react';
import Q5detail from './Q5detail';
import Q6detail from './Q6detail';
import Q9detail from './Q9detail';

class Questions extends Component {
  render() {
    return (
      <div className="full-page">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Nickname: {this.props.nickname}</h1>
            </div>
          </div>

          <form className="container" onSubmit={this.props.handleInput}>
            <button
              className="button container button is-success is-large"
              type="submit"
            >
              Send answers
            </button>

            <div className="question box" id="Q1">
              <label htmlFor="Q1_detail">
                Number of hours since last release
              </label>
              <p className='control'>
                <input
                  className="input"
                  data-msg-required="Write number of hours"
                  // required="required"
                  type="text"
                  name="q1"
                  id="Q1_detail"
                  placeholder="00"
                  onChange={this.props.onChange}
                />
              </p>
            </div>
            <div className="question box" id="Q2">
              <label htmlFor="q2">
                Did you have a fever and/or did you visit a doctor?
              </label>
              <div>
                <div className="radio">
                  <label className="radio">
                    YES{' '}
                    <input
                      className="radio"
                      data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q2"
                      value="true"
                      onChange={this.props.onChange}
                      checked={this.props.answers.q2 === 'true'}
                    />
                  </label>
                  {' '}
                  <label className="radio">
                    NO{' '}
                    <input
                      className="radio"
                      data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q2"
                      value="false"
                      onChange={this.props.onChange}
                      checked={this.props.answers.q2 === 'false'}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="box" id="Q3">
              <label>Did you have an unprotected sex with a new sexual partner?</label>
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
              {this.props.answers.q5 === 'true' ? (
                <Q5detail onChange={this.props.onChange} />
              ) : null}
            </div>
            <div className="question" id="Q6">
              <p>
                Have you recently been traveling outide the country, that you
                did not inform about?
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
              {this.props.answers.q6 === 'true' ? (
                <Q6detail onChange={this.props.onChange} />
              ) : null}
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
                Do you have a genital wart, vaginal epithelium or a wound on
                your genitals?
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
              {this.props.answers.q9 === 'true' ? (
                <Q9detail onChange={this.props.onChange} />
              ) : null}
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Questions;
