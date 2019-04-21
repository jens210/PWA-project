import React, { Component } from 'react';

class Boolean extends Component {
  render() {
    console.log('props');
    console.log(this.props.questions);
    return (
      <div>
        {this.props.questions.map(question => (
          <div className="question form-group" key={question._id}>
            {question.order}: {question.title} {question.type}
            {/* True / False questions Should be a component in itself 
          STYLE THE RButtons*/}
            <br />
              <div className="form-group">
                <label>
                  True
                  <input type="radio" className="form-check-inputs" />
                </label>
                <label>
                  False
                  <input type="radio" className="form-check-inputs" />
                </label>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Boolean;
