import React, { useState } from 'react';
import './style/App.css';
import TelephoneInputArea from './components/TelephoneInputArea';
import TelephoneKeyboard from './components/TelephoneKeyboard';

function App() {
  const [digits, setDigits] = useState(Array(11).fill(null));
  const [index, setIndex] = useState(0);

  const handleDigitInput = (index, value) => {
    if (index < 11) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setIndex(index + 1);
      setDigits(newDigits);
    }
  };

  const handleDigitDelete = (index) => {
    if (index > 0) {
      const newDigits = [...digits];
      newDigits[index - 1] = null;
      setIndex(index - 1);
      setDigits(newDigits);
    }
  }

  return (
    <div className="App app-container">
      <div className="roboto-bold title">電話番号を入力してください</div>
      <div className="roboto-light">please enter your phone number</div>
      <TelephoneInputArea digits={digits} />
      <TelephoneKeyboard digits={digits} index={index} onKeyPress={handleDigitInput} onDeleteKeyPress={handleDigitDelete} />
    </div>
  );
}

export default App;
