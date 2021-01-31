import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  appBar: {
    justifyContent: "space-evenly",
  },
  nonTransparent: {
    backgroundColor: "#BB2528",
  },
  transparent: {
    backgroundColor: "rgba(187, 37, 40, 0.6)",
    boxShadow: "none",
  },
  link: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontFamily: "Christmas Bold",
    letterSpacing: "2px",
    fontSize: "20px",
    color: theme.palette.primary.yellow,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textDecoration: "underline",
    },
  },
}));
const Header = ({ isTransparent }) => {
  const classes = useStyles();
  const transparent = isTransparent
    ? classes.transparent
    : classes.nonTransparent;

  return (
    <AppBar className={`${transparent}`} position="relative">
      <Toolbar className={`${classes.appBar}`}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/mission">
          What Is This?
        </Link>
        <Link className={classes.link} to="/map">
          Map
        </Link>
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/spreadsheets/d/1skJYfeya6QrZUZcUF0Vm0AvuyVlDxyNNTnvtbcCBSSU/edit?usp=sharing"
        >
          Add To Map
        </a>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isTransparent: PropTypes.bool,
};

export default Header;
