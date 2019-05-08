import React, { Component } from 'react';

class Q5detail extends Component {
  constructor(props) {
    super(props);

    this.state = { };
}

  render() {
    return (
      <div className="question_detail">
        <label className="question_detail_label">Where to?</label>
        <input 
          className="question_input" 
          // data-msg-required="Write down your travel destination" 
          // required="required" 
          type="text"
          name="q5_detail"
          id="q5_detail"
          onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Q5detail;
