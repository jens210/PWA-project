import React from 'react';

const Succes = () => {
  return (
    <div className="container">
      <h1>Success</h1>
      {this.props.answers.map( answer => (
        <div key={answer.key}>
        {answer.q1}
        </div>
      ))}
      <p>Thank you for your donation!</p>
    </div>
  );
};

export default Succes;
