import { useEffect, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#fff",
  },
}));

const MapForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form className={classes.mapForm} noValidate>
        <TextField id="formTitle" />
      </form>
    </div>
  );
};

export default MapForm;
