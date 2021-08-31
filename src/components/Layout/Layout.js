import { useState } from "react";
import CalculatorLayout from "../CalculatorLayout/CalculatorLayout";
import TipAmount from "../TipAmountLayout/TipAmount";
import classes from "./Layout.module.css";
let calcData = {
  total: 0,
  tip: 0,
  people: 0,
  bill: 0,
  percentage: 0,
};

const Layout = (props) => {
  const [totalData, setTotalData] = useState(calcData);

  const calculateTotalTip = () => {
    if (
      calcData.bill !== 0 &&
      calcData.percentage !== 0 &&
      calcData.people !== 0
    ) {
      let newTip = 0;
      let total = 0;
      let newPercentage = calcData.percentage / 100;
      newTip = newPercentage * calcData.bill;
      total = newTip * calcData.people;
      calcData.tip = newTip.toFixed(2);
      calcData.total = total.toFixed(2);
      setTotalData({ total: total, tip: newTip });
      console.log(calcData.tip, calcData.total, calcData.percentage);
    }
  };
  const inputChangeHandler = (event) => {
    let newBill = parseInt(event.target.value);
    calcData.bill = newBill;
    setTotalData({ bill: newBill });
    calculateTotalTip();
  };
  const peopleChangeHandler = (event) => {
    const newPeople = event.target.value;
    calcData.people = newPeople;
    setTotalData({ people: newPeople });
  };
  const buttonClickHandler = (id) => {
    let newPercentage = parseInt(id);
    calcData.percentage = newPercentage;
    setTotalData({ percentage: newPercentage });
    console.log(newPercentage, calcData.percentage);
    calculateTotalTip();
  };
  const resetAmount = () => {
    setTotalData({
      total: 0,
      tip: 0,
      bill: 0,
      percentage: 0,
      people: 0,
    });
    console.log("hello");
  };
  return (
    <div className={classes.Layout}>
      <CalculatorLayout
        total={totalData.total}
        tip={totalData.tip}
        clicked={buttonClickHandler}
        changed={inputChangeHandler}
        change={peopleChangeHandler}
      />
      <TipAmount
        tip={totalData.tip}
        total={totalData.total}
        reset={resetAmount}
      />
    </div>
  );
};

export default Layout;
