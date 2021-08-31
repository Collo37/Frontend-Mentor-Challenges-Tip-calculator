import React from "react";
import classes from "./DisplayBlock.module.css";

const DisplayBlock = (props) => {
  return (
    <div className={classes.Block}>
      <p>{props.title}</p>
      <p>{props.amount ? `$: ${props.amount.toFixed(2)}` : "$: 0.00"}</p>
    </div>
  );
};

export default DisplayBlock;
