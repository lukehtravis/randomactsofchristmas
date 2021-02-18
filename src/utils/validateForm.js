import { latValidator, longValidator } from "./coordValidator";
export const validateForm = (actOfChristmas) => {
  const errorMessages = {};
  let formIsValid = true;

  if (actOfChristmas.name === "") {
    errorMessages.name = "Please give your Act Of Christmas A Name";
  }

  if (actOfChristmas.description === "") {
    errorMessages.description =
      "Please give your Act Of Christmas A Description";
  }

  if (
    longValidator(actOfChristmas.longitude) === false ||
    latValidator(actOfChristmas.latitude) === false
  ) {
    errorMessages.coordinates = "Please click a spot on the map";
  }

  if (
    errorMessages.hasOwnProperty("name") ||
    errorMessages.hasOwnProperty("description") ||
    errorMessages.hasOwnProperty("coordinates")
  ) {
    formIsValid = false;
  }
  return { valid: formIsValid, errorMessages: errorMessages };
};
