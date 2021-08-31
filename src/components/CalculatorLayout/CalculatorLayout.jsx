import { Component } from "react";
import classes from "./CalculatorLayout.module.css";
import Checkbox from "../UI/CheckBox/Checkbox";

export class CalculatorLayout extends Component {
  render() {
    const percentageTips = [5, 10, 15, 25, 50];
    const tipOptions = percentageTips.map((tip, index) => {
      const id = percentageTips[index];
      return (
        <Checkbox
          key={id}
          val={id}
          clicked={() => this.props.clicked(id)}
          percentage={`${tip}%`}
        />
      );
    });

    tipOptions.push(<Checkbox key="custom" percentage="Custom" />);
    return (
      <div
        className={classes.CalculatorLayout}
        total={this.props.total}
        tip={this.props.tip}
      >
        <div className={classes.InputContainer}>
          <label htmlFor="text">Bill</label>
          <input
            className={classes.Input}
            onChange={this.props.changed}
            type="text"
          />
        </div>
        <div className={classes.ButtonsContainer}>
          <p>Select Tip</p>
          {tipOptions}
        </div>
        <div className={classes.InputContainer}>
          <label htmlFor="text">Number of people</label>
          <input
            className={classes.Input}
            onChange={this.props.change}
            type="text"
          />
        </div>
      </div>
    );
  }
}
export default CalculatorLayout;
