import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
        <div className="success">
          <div className="header">
            <h1>
            <span role="img" aria-label="success">
              🙌
            </span>
              Success
              <span role="img" aria-label="success">
              🙌
            </span>
            </h1>
            <p>Thank you for your candor {this.props.answers.nickname}. Now, we encourage you to finish your donation.</p>
          </div>
          <div className="review">
            <p>Summary of your answers</p>
            <div className="review_answer">
              <p><span className="review_answer_number">1.</span> Number of hours since last release</p>
              <p>{this.props.answers.q1}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">2.</span> Did you have a&nbsp;fever and/or did you visit a&nbsp;doctor?</p>
              <p>{this.props.answers.q2}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">3.</span> Did you have an unprotected sex with a&nbsp;new sexual partner?</p>
              <p>{this.props.answers.q3}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">4.</span> Did you have sex with a&nbsp;prostitute since the last donation?</p>
              <p>{this.props.answers.q4}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">5.</span> Do you plan to travel in near future?</p>
              <p>{this.props.answers.q5}</p>
              {this.props.answers.q5_detail != null ? (<p>Details: {this.props.answers.q5_detail}</p>) : null}
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">6.</span> Have you recently been traveling outside the country, that you did not inform about?</p>
              <p>{this.props.answers.q6}</p>
              {this.props.answers.q6_detail != null ? (<p>Details: {this.props.answers.q6_detail}</p>) : null}
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">7.</span> Did you get a&nbsp;new piercing, tattoo, or similar?</p>
              <p>{this.props.answers.q7}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">8.</span> Do you have a genital wart, vaginal epithelium or a&nbsp;wound on your genitals?</p>
              <p>{this.props.answers.q8}</p>
            </div>
            <div className="review_answer">
              <p><span className="review_answer_number">9.</span> Did you take any narcotics since the last donation?</p>
              <p>{this.props.answers.q9}</p>
              {this.props.answers.q9_detail != null ? (<p>Details: {this.props.answers.q9_detail}</p>) : null}
            </div>
          </div>
        </div>
    );
  }
}

export default Success;
