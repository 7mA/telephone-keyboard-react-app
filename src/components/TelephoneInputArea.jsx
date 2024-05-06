import React from 'react';
import '../style/index.css';

const TelephoneInputArea = ({ digits }) => {

  return (
    <div className="digit-input-container">
      {digits.map((digit, index) => (
        <div
          key={index}
          className={`digit-placeholder ${digit !== null ? 'has-digit' : 'no-digit'} o-input--num-display roboto-bold`}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default TelephoneInputArea;