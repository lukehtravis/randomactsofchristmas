export const latValidator = (someNumber) => {
  const isLatitude = isFinite(someNumber) && Math.abs(someNumber) <= 90;
  return isLatitude;
};

export const longValidator = (someNumber) => {
  const isLongitude = isFinite(someNumber) && Math.abs(someNumber) <= 180;
  return isLongitude;
};
