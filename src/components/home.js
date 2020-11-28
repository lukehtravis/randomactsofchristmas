import "../App.css";
import Header from "./header";
import tree from "../tree.jpg";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${tree}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh",
  },
  overlayBox: {
    position: "absolute",
    top:
      "50%" /* position the top  edge of the element at the middle of the parent */,
    left:
      "50%" /* position the left edge of the element at the middle of the parent */,
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0, 0.8)",
  },
  overlayText: {
    fontSize: "20px",
    padding: "30px 50px",
    fontFamily: "Christmas",
    color: theme.palette.primary.lightRed,
    position: "relative",
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
          <h1>Want To Spread Some Christmas Cheer?</h1>
          <div className={classes.buttonContainer}>
            <Button className={classes.button}>Check The Map</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
