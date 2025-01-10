import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import TipInput from "./TipInput";
import TipSelector from "./TipSelector";

const Layout: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [tips, setTips] = useState([10, 15, 20]);
  const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });

  return (
    <div>
      {isLandscape ? (
        <TipSelector amount={amount} tips={tips} />
      ) : (
        <TipInput onValuesChange={(amt, tps) => {
          setAmount(amt);
          setTips(tps);
        }} />
      )}
    </div>
  );
};

export default Layout;
