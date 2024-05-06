import React, { useState, useEffect } from 'react';

const VirtualKeyboard = ({ digits, onKeyPress, index, onDeleteKeyPress }) => {
    const keys = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

    const [isEnterActive, setIsEnterActive] = useState(false);

    const activateEnterButton = () => {
      setIsEnterActive(true);
    };

    const deactivateEnterButton = () => {
      setIsEnterActive(false);
    };

    useEffect(() => {
      if (index === 10 && digits[0] === 0) {
        activateEnterButton();
      } else if (index === 11 && digits[0] === 0 && digits[2] === 0) {
        activateEnterButton();
      } else {
        deactivateEnterButton();
      }
    }, [index, digits]);

    return (
    <div className="virtual-keyboard">
        {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
            {row.map(key => (
            <button id={`keypad-${key}`} key={key} onClick={() => onKeyPress(index, key)} className="key-button roboto-bold">
                {key}
            </button>
            ))}
        </div>
        ))}
        {/* 特殊キーの行 */}
        <div className="keyboard-row">
        <button id="keypad-delete" onClick={() => onDeleteKeyPress(index)} className="key-button special-key roboto-bold">×</button>
        <button id="keypad-0" onClick={() => onKeyPress(index, 0)} className="key-button roboto-bold">0</button>
        <button id="keypad-enter" onClick={(() => alert('呼び出しました。'))} className={`key-button special-key ${!isEnterActive ? 'inactive' : ''}`} disabled={!isEnterActive}>↵</button>
        </div>
    </div>
    );
};
  
  export default VirtualKeyboard;