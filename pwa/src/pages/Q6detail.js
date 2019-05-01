import React, { Component } from 'react';

class Q6detail extends Component {
  constructor(props) {
    super(props);

    this.state = { };
}

  render() {
    return (
      <div className="question_detail">
        <label className="question_detail_label" htmlFor="Q6_detail">Where to?</label>
        <input 
          className="question_input" 
          data-msg-required="Write down your travel destination" 
          required="required" 
          type="text" 
          name="q6_detail"
          id="q6_detail" 
          onChange={this.props.onChange}/>
        </div>
    );
  }
}

export default Q6detail;
