export const styles = {
  container: {
    backgroundColor: "#fff",
    marginBottom: "25px",
    padding: "25px",
  },
  textField: {
    marginBottom: "20px",
  },
  largeText: {
    fontFamily: "Emilys Candy",
    color: "#BB2528",
    fontSize: "15px",
  },
  smallText: {
    fontFamily: "Emilys Candy",
    fontSize: "13px",
    color: "#BB2528",
  },
  input: {
    fontFamily: "Emilys Candy",

    fontSize: "15px",
    color: "#BB2528",
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
  },
};
