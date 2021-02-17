import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MapButton from "./mapButton";
import MapForm from "./mapForm";

const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
}));

const FormContainer = () => {
  let [formVisible, setFormVisible] = useState(false);
  let classes = useStyles();
  return (
    <div className={classes.container}>
      {formVisible && <MapForm />}
      <MapButton modalToggle={setFormVisible} formVisible={formVisible} />
    </div>
  );
};

export default FormContainer;
