import { placeMapMarkers } from "./placeMapMarkers";
export const getMapData = (mapboxgl, mapbox, setMap) => {
  try {
    fetch("https://api-randomactsofchristmas.herokuapp.com/api/actsofchristmas")
      .then((response) => response.json())
      .then((data) => {
        placeMapMarkers(data, mapbox, mapboxgl);
        setMap(mapbox);
        mapbox.resize();
      });
  } catch (e) {
    console.log("error fetching data: ", e);
    return null;
  }
};
