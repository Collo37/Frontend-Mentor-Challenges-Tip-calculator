import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <p>{props.title}</p>
    </div>
  );
};

export default Header;
