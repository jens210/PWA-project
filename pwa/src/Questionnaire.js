import React, { Component } from 'react';
import './styles.css';

class Questionnaire extends Component {
  render() {
    return (
      <div className="container">
    <form>
      <div className="question" id="Q1">
        <p>Number of hours since last release</p>
        <input className="question_input" data-msg-required="Write number of hours" required="required" type="text" id="Q1_detail" placeholder="00"/>
      </div>
      <div className="question" id="Q2">
        <p>Did you have a fever and/or did you visit a doctor?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q2_yes">YES
              <input clasNames="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q2_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q2_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q2_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
      </div>
      <div className="question" id="Q3">
        <p>Did you have an unprotected sex with a new sexual partner?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q3_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q3_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q3_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q3_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
      </div>
      <div className="question" id="Q4">
        <p>Did you have sex with a prostitute since the last donation?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q4_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q4_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q4_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q4_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
      </div>
      <div className="question" id="Q5">
        <p>Do you plan to travel in near future?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q5_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q5_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q5_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q5_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
        <div className="question_detail">
          <label className="question_detail_label" for="Q5_detail">Where to?</label>
          <input className="question_input" data-msg-required="Write down your travel destination" required="required" type="text" id="Q5_detail" />
        </div>
      </div>
      <div className="question" id="Q6">
        <p>Have you recently been traveling outide the country, that you did not inform about?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q6_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q6_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q6_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q6_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
        <div className="question_detail">
          <label className="question_detail_label" for="Q6_detail">Where to?</label>
          <input className="question_input" data-msg-required="Write down your travel destination" required="required" type="text" id="Q6_detail" />
        </div>
      </div>
      <div className="question" id="Q7">
        <p>Did you get a new piercing, tattoo, or similar?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q7_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q7_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q7_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q7_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
      </div>
      <div className="question" id="Q8">
        <p>Do you have a genital wart, vaginal epithelium or a wound on your genitals?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q8_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q8_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q8_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q8_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
      </div>
      <div className="question" id="Q9">
        <p>Did you take any narcotics since the last donation?</p>
        <ul>
          <li>
            <label className="question_option_container" for="Q9_yes">YES
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q9_yes" />
              <div className="check"></div>
            </label>
          </li>
          <li>
            <label className="question_option_container" for="Q9_no">NO
              <input className="question_option_input" data-msg-required="Choose one of the options" required="required" type="radio" id="Q9_no" />
              <div className="check"></div>
            </label>
          </li>
        </ul>
        <div className="question_detail">
          <label className="question_detail_label" for="Q9_detail">Which ones?</label>
          <input className="question_input" data-msg-required="Write down the narcotics" required="required" type="text" id="Q9_detail" />
        </div>
      </div>
    </form>
  </div>
    );
  }
}

export default Questionnaire;
