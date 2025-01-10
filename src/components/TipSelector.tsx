import React from "react";

interface TipSelectorProps {
  amount: number;
  tips: number[];
}

const TipSelector: React.FC<TipSelectorProps> = ({ amount, tips }) => {
  return (
    <div>
      <h2>Select a Tip</h2>
      {tips.map((tip, index) => (
        <button key={index} onClick={() => alert(`Tip: ${(amount * tip) / 100}`)}>
          {tip}% (${((amount * tip) / 100).toFixed(2)})
        </button>
      ))}
    </div>
  );
};

export default TipSelector;
