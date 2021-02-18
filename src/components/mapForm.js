import PropTypes from "prop-types";
import { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { validateForm } from "../utils/validateForm";

const useStyles = makeStyles(() => ({
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
}));

const MapForm = ({ addActCoords }) => {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charsLeft, setCharsLeft] = useState(0);
  const [errors, setErrors] = useState({});
  const [actOfChristmas, setActOfChristmas] = useState({
    name: "",
    description: "",
  });

  const handleInputInfo = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "description") {
      setCharsLeft(300 - value.length);
    }

    setActOfChristmas({
      ...actOfChristmas,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const actData = {
      name: actOfChristmas.name,
      description: actOfChristmas.description,
      longitude: addActCoords.lng,
      latitude: addActCoords.lat,
    };

    console.log(JSON.stringify(actData));

    const { valid, errorMessages } = validateForm(actData);

    if (!valid) {
      setErrors(errorMessages);
    }

    if (valid) {
      try {
        fetch(
          `https://api-randomactsofchristmas.herokuapp.com/api/actsofchristmas`,
          {
            body: JSON.stringify(actData),
            method: "POST",
          }
        ).then((response) => {
          setIsSubmitted(true);
          setErrors({});
          setActOfChristmas({
            name: "",
            description: "",
          });
          console.log(response);
          alert("Congrats! Your Submission Was Succesful!");
        });
      } catch (e) {
        console.log("server error", e);
        setErrors({
          ...errors,
          serverError:
            "Oh Snap! There was a problem with the server, (or maybe a bit flip hehe). Feel free to try again.",
        });
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.largeText}>
        <p>Add your Act Of Christmas!</p>
        <p>
          Click somewhere on the map and your co-ordinates will populate in the
          form
        </p>
        <p>Add a name and a description of the random act</p>
        <p>Hit Submit! The map will populate with your random act</p>
      </div>
      <form className={classes.mapForm} noValidate onSubmit={handleSubmit}>
        <div className={classes.textField}>
          <TextField
            required
            inputProps={{ maxLength: 115 }}
            error={errors.hasOwnProperty("name")}
            className={classes.input}
            fullWidth
            placeholder="Title of Act*"
            id="form-name"
            name="name"
            multiline
            InputProps={{ classes: { input: classes.input } }}
            onChange={handleInputInfo}
            rows={2}
          />
          {errors.hasOwnProperty("name") && (
            <FormHelperText htmlFor="render-input" error>
              {errors.name}
            </FormHelperText>
          )}
        </div>
        <div className={classes.textField}>
          <TextField
            required
            error={errors.hasOwnProperty("description")}
            className={classes.input}
            fullWidth
            inputProps={{ maxLength: 300 }}
            id="form-description"
            name="description"
            placeholder="Description of Act*"
            InputProps={{ classes: { input: classes.input } }}
            onChange={handleInputInfo}
            multiline
            rows={4}
          />
          <div className={classes.counter}>
            <span className={classes.largeText}>{charsLeft}</span>
            <span className={classes.largeText}>/</span>
            <span className={classes.largeText}>300</span>
          </div>
          {errors.hasOwnProperty("description") && (
            <FormHelperText htmlFor="render-input" error>
              {errors.description}
            </FormHelperText>
          )}
        </div>
        <p className={classes.smallText}>
          Longitude:{" "}
          {addActCoords.lng
            ? addActCoords.lng
            : "Click on the map to make Longitude appear"}
        </p>
        <p className={classes.smallText}>
          Latitude:{" "}
          {addActCoords.lat
            ? addActCoords.lat
            : "Click on the map to make Latitude appear"}
        </p>
        {errors.hasOwnProperty("coordinates") && (
          <FormHelperText htmlFor="render-input" error>
            <p>{errors.coordinates}</p>
          </FormHelperText>
        )}
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

MapForm.propTypes = {
  addActCoords: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default MapForm;
