import React from "react";
import classes from "./DisplayBlock.module.css";

const DisplayBlock = (props) => {
  return (
    <div className={classes.Block}>
      <p>{props.title}</p>
      <p>{props.amount}</p>
    </div>
  );
};

export default DisplayBlock;
