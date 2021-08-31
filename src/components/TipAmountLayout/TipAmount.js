import DisplayBlock from "../UI/DisplayBlock/DisplayBlock";
import classes from "./TipAmount.module.css";

const TipAmount = (props) => {
  return (
    <div className={classes.TipAmountContainer}>
      <div className={classes.PricingContainer}>
        <DisplayBlock title="Tip Amount" amount={props.tip} />
        <DisplayBlock title="Total" amount={props.total} />
      </div>
      <button
        className={classes.Reset}
        onClick={props.reset}
        disabled={!props.total === 0}
      >
        RESET
      </button>
    </div>
  );
};

export default TipAmount;
