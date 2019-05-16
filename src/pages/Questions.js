import React, { Component } from 'react';
import Q5detail from './Q5detail';
import Q6detail from './Q6detail';
import Q9detail from './Q9detail';

class Questions extends Component {
  render() {
    return (
        <div className="full-page">
          <div className="header">
            <h1 className='title'>Nice to see you {this.props.nickname}</h1>
            <p>There are few important things we need to ask you...</p>
          </div>

          <form onSubmit={this.props.handleInput}>

            <div className="question" id="Q1">
              <p className="number">1 of 9</p>
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
              <p className="number">2 of 9</p>
              <p>Did you have a&nbsp;fever and/or did you visit a&nbsp;doctor?</p>
              <div className="radio">
                <label className="question_option_container">
                  YES
                  <input
                      className="question_option_input"
                      data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q2"
                      value="yes"
                      onChange={this.props.onChange}
                      checked={this.props.answers.q2 === 'yes'}
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
                      value="no"
                      onChange={this.props.onChange}
                      checked={this.props.answers.q2 === 'no'}
                  />
                  <div className="check" />
                </label>
              </div>
            </div>
            <div className="question" id="Q3">
              <p className="number">3 of 9</p>
              <p>Did you have an unprotected sex with a&nbsp;new sexual partner?</p>
              <div className="radio">
                <label className="question_option_container">
                  YES
                  <input
                      className="question_option_input"
                      data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q3"
                      value="yes"
                      checked={this.props.answers.q3 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q3 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
            </div>
            <div className="question" id="Q4">
              <p className="number">4 of 9</p>
              <p>Did you have sex with a&nbsp;prostitute since the last donation?</p>
              <div className="radio">
                <label className="question_option_container">
                  YES
                  <input
                      className="question_option_input"
                      data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q4"
                      value="yes"
                      checked={this.props.answers.q4 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q4 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
            </div>
            <div className="question" id="Q5">
              <p className="number">5 of 9</p>
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
                      value="yes"
                      checked={this.props.answers.q5 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q5 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
              {this.props.answers.q5 === 'yes' ? (
                  <Q5detail onChange={this.props.onChange} />
              ) : null}
            </div>
            <div className="question" id="Q6">
              <p className="number">6 of 9</p>
              <p>
                Have you recently been traveling outside the country, that you did
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
                      value="yes"
                      checked={this.props.answers.q6 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q6 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
              {this.props.answers.q6 === 'yes' ? (
                  <Q6detail onChange={this.props.onChange} />
              ) : null}
            </div>
            <div className="question" id="Q7">
              <p className="number">7 of 9</p>
              <p>Did you get a&nbsp;new piercing, tattoo, or similar?</p>
              <div className="radio">
                <label className="question_option_container">
                  YES
                  <input
                      className="question_option_input"
                      // data-msg-required="Choose one of the options"
                      // required="required"
                      type="radio"
                      name="q7"
                      value="yes"
                      checked={this.props.answers.q7 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q7 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
            </div>
            <div className="question" id="Q8">
              <p className="number">8 of 9</p>
              <p>
                Do you have a genital wart, vaginal epithelium or a&nbsp;wound on your
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
                      value="yes"
                      checked={this.props.answers.q8 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q8 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
            </div>
            <div className="question" id="Q9">
              <p className="number">9 of 9</p>
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
                      value="yes"
                      checked={this.props.answers.q9 === 'yes'}
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
                      value="no"
                      checked={this.props.answers.q9 === 'no'}
                      onChange={this.props.onChange}
                  />
                  <div className="check" />
                </label>
              </div>
              {this.props.answers.q9 === 'yes' ? (
                  <Q9detail onChange={this.props.onChange} />
              ) : null}
            </div>

            <button className="is-success send" type="submit">
              Send answers
            </button>
          </form>

        </div>
    );
  }
}

export default Questions;
