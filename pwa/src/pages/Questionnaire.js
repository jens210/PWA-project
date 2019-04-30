import React, { Component } from 'react';
import '../styles.css';

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      nickname: this.props.nickname,
      q2: null,
     };
  }

  handleRadioChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


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
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q2"
            value="true" 
            checked={this.state.q2 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q2" 
            value="false" 
            checked={this.state.q2 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
      </div>
      <div className="question" id="Q3">
        <p>Did you have an unprotected sex with a new sexual partner?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q3"
            value="true" 
            checked={this.state.q3 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q3" 
            value="false" 
            checked={this.state.q3 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
      </div>
      <div className="question" id="Q4">
        <p>Did you have sex with a prostitute since the last donation?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q4"
            value="true" 
            checked={this.state.q4 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q4" 
            value="false" 
            checked={this.state.q4 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
      </div>
      <div className="question" id="Q5">
        <p>Do you plan to travel in near future?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q5"
            value="true" 
            checked={this.state.q5 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q5" 
            value="false" 
            checked={this.state.q5 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
        <div className="question_detail">
          <label className="question_detail_label" htmlFor="Q5_detail">Where to?</label>
          <input className="question_input" data-msg-required="Write down your travel destination" required="required" type="text" id="Q5_detail" />
        </div>
      </div>
      <div className="question" id="Q6">
        <p>Have you recently been traveling outide the country, that you did not inform about?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q6"
            value="true" 
            checked={this.state.q6 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q6" 
            value="false" 
            checked={this.state.q6 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
        <div className="question_detail">
          <label className="question_detail_label" htmlFor="Q6_detail">Where to?</label>
          <input className="question_input" data-msg-required="Write down your travel destination" required="required" type="text" id="Q6_detail" />
        </div>
      </div>
      <div className="question" id="Q7">
        <p>Did you get a new piercing, tattoo, or similar?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q7"
            value="true" 
            checked={this.state.q7 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q7" 
            value="false" 
            checked={this.state.q7 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
      </div>
      <div className="question" id="Q8">
        <p>Do you have a genital wart, vaginal epithelium or a wound on your genitals?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q8"
            value="true" 
            checked={this.state.q8 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q8" 
            value="false" 
            checked={this.state.q8 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
      </div>
      <div className="question" id="Q9">
        <p>Did you take any narcotics since the last donation?</p>
        <div className="radio">
          <label className="question_option_container">YES
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q9"
            value="true" 
            checked={this.state.q9 === "true"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
          <label className="question_option_container">NO
            <input 
            className="question_option_input" 
            data-msg-required="Choose one of the options" 
            required="required" 
            type="radio" 
            name="q9" 
            value="false" 
            checked={this.state.q9 === "false"}
            onChange={this.props.onChange}
            />
            <div className="check"></div>
          </label>
        </div>
        <div className="question_detail">
          <label className="question_detail_label" htmlFor="Q9_detail">Which ones?</label>
          <input className="question_input" data-msg-required="Write down the narcotics" required="required" type="text" id="Q9_detail" />
        </div>
      </div>
    </form>
  </div>
    );
  }
}

export default Questionnaire;
