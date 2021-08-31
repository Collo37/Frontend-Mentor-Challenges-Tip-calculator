import classes from "./Checkbox.module.css";

const checkBox = (props) => {
  return (
    <button className={classes.Checkbox} onClick={props.clicked}>
      {props.percentage}
    </button>
  );
};

export default checkBox;
