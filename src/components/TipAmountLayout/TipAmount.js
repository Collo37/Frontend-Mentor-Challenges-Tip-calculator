import DisplayBlock from "../UI/DisplayBlock/DisplayBlock";
import classes from "./TipAmount.module.css";

const tipAmount = (props) => {
  return (
    <div className={classes.TipAmountContainer}>
      <div className={classes.PricingContainer}>
        <DisplayBlock title="Tip Amount" amount={props.amount} />
        <DisplayBlock title="Total" amount={props.total} />
      </div>
      <button className={classes.Reset} onClick={props.clicked}>
        RESET
      </button>
    </div>
  );
};

export default tipAmount;
