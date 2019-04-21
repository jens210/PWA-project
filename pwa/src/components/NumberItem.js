import React from 'react';

const NumberItem = () => {
  return (
    <div className="form-group text-center">
      <label className='' htmlFor="formControlRange">How many hours --?</label>
      <input type="range" className="form-control-range" id="formControlRange" />
    </div>
  );
};

export default NumberItem;
