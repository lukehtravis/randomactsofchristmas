import "../App.css";
import Header from "./header";
import treeCat from "../treeCat.jpg";
import treeCatMobile from "../treeCatMobile.jpg";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${treeCat}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      background: `url(${treeCatMobile}) no-repeat center center fixed`,
      backgroundSize: "cover",
    },
  },
  overlayBox: {
    position: "absolute",
    top:
      "50%" /* position the top  edge of the element at the middle of the parent */,
    left:
      "50%" /* position the left edge of the element at the middle of the parent */,
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0, 0.7)",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  introducer: {
    fontSize: "22px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  overlayText: {
    fontSize: "20px",
    padding: "30px 50px",
    fontFamily: "Christmas",
    color: theme.palette.primary.lightRed,
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 25px",
    },
  },
  button: {
    backgroundColor: theme.palette.primary.lightGreen,
    color: "#fff",
    padding: "20px 35px",
    fontSize: "20px",
    letterSpacing: "2px",
    borderRadius: "35px",
    "&:hover": {
      backgroundColor: theme.palette.primary.lightGreen,
    },
  },
  buttonContainer: {
    position: "absolute",
    bottom:
      "-100%" /* position the top  edge of the element at the middle of the parent */,
    left:
      "50%" /* position the left edge of the element at the middle of the parent */,
    transform: "translate(-50%, -50%)",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header isTransparent={true} />
      <div className={classes.overlayBox}>
        <div className={classes.overlayText}>
          <p className={classes.introducer}>Welcome To</p>
          <h1 className={classes.title}>
            Random Acts Of Christmas
            <br />
            -
            <br />A new Christmas tradition
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
