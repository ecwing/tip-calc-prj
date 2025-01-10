import React, { useState } from "react";

interface TipInputProps {
  onValuesChange: (amount: number, tips: number[]) => void;
}

const TipInput: React.FC<TipInputProps> = ({ onValuesChange }) => {
  const [amount, setAmount] = useState(0);
  const [tips, setTips] = useState([10, 15, 20]);

  const handleTipChange = (index: number, value: number) => {
    const newTips = [...tips];
    newTips[index] = value;
    setTips(newTips);
    onValuesChange(amount, newTips);
  };

  return (
    <div>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            const val = parseFloat(e.target.value) || 0;
            setAmount(val);
            onValuesChange(val, tips);
          }}
        />
      </label>
      <div>
        {tips.map((tip, index) => (
          <div key={index}>
            <label>
              Tip {index + 1} (%):
              <input
                type="number"
                value={tip}
                onChange={(e) => handleTipChange(index, parseFloat(e.target.value) || 0)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipInput;
