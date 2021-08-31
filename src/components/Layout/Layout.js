import CalculatorLayout from "../CalculatorLayout/CalculatorLayout";
import TipAmount from "../TipAmountLayout/TipAmount";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <CalculatorLayout />
      <TipAmount />
    </div>
  );
};

export default Layout;
