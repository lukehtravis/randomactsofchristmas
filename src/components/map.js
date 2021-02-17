import { useRef, useState, useEffect } from "react";
import "../App.css";
import Header from "./header";
import { makeStyles } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import treeIcon from "../treeIcon.png";
import { getMapData } from "../utils/getMapData";
import FormContainer from "./formContainer";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    "& .marker": {
      backgroundImage: `url(${treeIcon})`,
      backgroundSize: "cover",
      width: "35px",
      height: "35px",
      cursor: "pointer",
    },
    "& .popup-header": {
      color: theme.palette.primary.lightGreen,
      fontFamily: "Emilys Candy",
      letterSpacing: "1px",
    },
    "& .popup-description": {
      color: theme.palette.primary.lightGreen,
      fontFamily: "Emilys Candy",
      letterSpacing: "1px",
    },
    "& .mapboxgl-ctrl-top-right": {
      right: "40px",
    },
  },
}));

function Map() {
  const { REACT_APP_MAPBOX } = process.env;
  let [mapOrigin, setMapOrigin] = useState([-122.273225, 37.843999]);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    mapboxgl.accessToken = REACT_APP_MAPBOX;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMapOrigin([position.coords.longitude, position.coords.latitude]);
      });
    }
    // Mapbox takes coordinates in as [longitude, latitude]
    const initializeMap = ({ setMap, mapContainer }) => {
      const mapbox = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: mapOrigin,
        zoom: 10,
      });
      // Add zoom and rotation controls to the map.

      mapbox.addControl(new mapboxgl.NavigationControl());
      mapbox.on("load", () => {
        getMapData(mapboxgl, mapbox, setMap);
      });
      mapbox.on("click", "marker", (e) => {
        e.target.togglePopup();
      });
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [REACT_APP_MAPBOX, map, mapOrigin]);
  return (
    <div className={classes.background}>
      <Header isTransparent={false} />
      <div
        data-testid="map"
        className={classes.mapContainer}
        ref={mapContainer}
      ></div>
      <FormContainer />
    </div>
  );
}

export default Map;
