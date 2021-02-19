import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    marginBottom: "25px",
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      left: "0px",
      bottom: "0px",
      width: "40%",
      marginBottom: "10px",
      padding: "10px",
      "& p": {
        margin: "5px 0",
      },
    },
  },
  textField: {
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "7px",
    },
  },
  largeText: {
    fontFamily: "Emilys Candy",
    color: "#BB2528",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
  smallText: {
    fontFamily: "Emilys Candy",
    fontSize: "13px",
    color: "#BB2528",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  input: {
    fontFamily: "Emilys Candy",
    fontSize: "15px",
    color: "#BB2528",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "0px",
    },
    "& textarea": {
      border: "1px solid #165B33",
      borderRadius: "3px",
      padding: "10px",
    },
    "&::placeholder": {
      fontFamily: "Emilys Candy",
      fontSize: "15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
    "& .MuiInput-underline:before": {
      border: "0px",
    },
  },
  button: {
    padding: "12px 40px",
    border: "1px solid #D8D8D8",
    marginTop: "20px",
    borderRadius: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
    },
  },
}));
