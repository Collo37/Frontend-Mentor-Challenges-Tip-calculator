import classes from "./CalculatorLayout.module.css";
import Checkbox from "../UI/CheckBox/Checkbox";

const CalculatorLayout = () => {
  const percentageTips = [5, 10, 15, 25, 50];
  const tipOptions = percentageTips.map((tip, index) => {
    return <Checkbox key={index} percentage={`${tip}%`} />;
  });
  tipOptions.push(<Checkbox key="custom" percentage="Custom" />);
  return (
    <div className={classes.CalculatorLayout}>
      <div className={classes.InputContainer}>
        <label htmlFor="text">Bill</label>
        <input className={classes.Input} type="text" />
      </div>
      <div className={classes.ButtonsContainer}>
        <p>Select Tip</p>
        {tipOptions}
      </div>
      <div className={classes.InputContainer}>
        <label htmlFor="text">Number of people</label>
        <input className={classes.Input} type="text" />
      </div>
    </div>
  );
};

export default CalculatorLayout;
