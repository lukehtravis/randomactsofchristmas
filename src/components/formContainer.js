import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MapButton from "./mapButton";
import MapForm from "./mapForm";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
}));

const FormContainer = ({ formVisible, setFormVisible, addActCoords }) => {
  let classes = useStyles();
  return (
    <div className={classes.container}>
      {formVisible && <MapForm addActCoords={addActCoords} />}
      <MapButton modalToggle={setFormVisible} formVisible={formVisible} />
    </div>
  );
};

FormContainer.propTypes = {
  addActCoords: PropTypes.object,
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func,
};

export default FormContainer;
