import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    justifyContent: "center",
  },
  transparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  link: {
    marginLeft: "50px",
    textTransform: "uppercase",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Christmas Bold",
    letterSpacing: "2px",
    fontSize: "20px",
    color: theme.palette.primary.yellow,
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const transparent = props.isTransparent ? classes.transparent : null;

  return (
    <div>
      <AppBar className={`${transparent}`}>
        <Toolbar className={`${classes.appBar}`}>
          <Link className={classes.link} to="/mission">
            Mission
          </Link>
          <Link className={classes.link} to="/map">
            Map
          </Link>
          <Link className={classes.link} to="/spreadsheet">
            Add Cheer
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
