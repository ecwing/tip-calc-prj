import React from "react";

interface TipDisplayProps {
    amount: number; // The original bill amount
    selectedTip: number; // The selected tip percentage
  }
  
  const TipDisplay: React.FC<TipDisplayProps> = ({ amount, selectedTip }) => {
    // Calculate tip and total
    const tipAmount = (amount * selectedTip) / 100;
    const total = amount + tipAmount;
  
    return (
      <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" }}>
        <h3>Tip Details</h3>
        <p>
          <strong>Bill Amount:</strong> ${amount.toFixed(2)}
        </p>
        <p>
          <strong>Selected Tip:</strong> {selectedTip}%
        </p>
        <p>
          <strong>Tip Amount:</strong> ${tipAmount.toFixed(2)}
        </p>
        <p>
          <strong>Total Amount:</strong> ${total.toFixed(2)}
        </p>
      </div>
    );
  };
  
  export default TipDisplay;