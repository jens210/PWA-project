import React, { Component } from 'react';

class Q6detail extends Component {
  constructor(props) {
    super(props);

    this.state = { };
}

  render() {
    return (
      <div className="question_detail">
        <label className="question_detail_label" htmlFor="Q9_detail">Which ones?</label>
        <input 
          className="question_input" 
          data-msg-required="Write down the narcotics" 
          required="required" 
          type="text" 
          name="q9_detail"
          id="q9_detail" 
          onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default Q6detail;
