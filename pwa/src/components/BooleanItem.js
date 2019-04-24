import React from 'react';

// INTENDED TO HOST THE BOOLEAN OPTIONS IN A ATOMMIC SETUP
// CHANGE FROM NON-FUNCTIONAL RB TO BTN

const BooleanItem = question => {
  return (
    <div className="form-check text-center">
      <label>
        True {' '}
        <input type="radio" className="form-check-inputs" />
      </label>
      <br/>
      <label>
        False {' '}
        <input type="radio" className="form-check-inputs" />
      </label>
    </div>
  );
};

export default BooleanItem;
