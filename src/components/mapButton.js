import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  container: {
    float: "right",
  },
  button: {
    backgroundColor: "#165B33",
    borderRadius: "100%",
    width: "50px",
    height: "65px",
    "&:hover": {
      backgroundColor: "rgba(22, 91, 51, 0.9)",
    },
  },
  icon: {
    color: "#fff",
  },
}));

const MapButton = ({ modalToggle, formVisible }) => {
  let classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        onClick={() => modalToggle(!formVisible)}
        className={classes.button}
      >
        <AddIcon className={classes.icon} />
      </Button>
    </div>
  );
};

MapButton.propTypes = {
  modalToggle: PropTypes.func,
  formVisible: PropTypes.bool,
};

export default MapButton;
