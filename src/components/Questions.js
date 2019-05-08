import React, { Component } from 'react';
import BooleanItem from './BooleanItem';
import NumberItem from './NumberItem';

class Questions extends Component {
  render() {
    // console.log(this.props.questions);
    return (
      <div>
        {this.props.questions.map(question => (
          <div className="question card" key={question._id}>
            <h5 className="card-header">{question.order} {question.title}</h5>
            <div className="card-body">
              <p className="small-text">{question.type}
              </p>
              {/* True / False questions are found in BooleanItem
               */}
              {question.type === 'Boolean' ? <BooleanItem /> : <NumberItem />}
            </div>
          </div>
        ))}
        <br />
      </div>
    );
  }
}

export default Questions;
