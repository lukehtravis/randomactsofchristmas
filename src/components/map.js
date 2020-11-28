import { useRef, useState, useEffect } from "react";
import "../App.css";
import Header from "./header";
import { makeStyles } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    width: "100vw",
    height: "100vh",
  },
}));

function Map() {
  const { REACT_APP_MAPBOX } = process.env;

  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    mapboxgl.accessToken = REACT_APP_MAPBOX;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div className={classes.background}>
      <Header isTransparent={false} />
      <div className={classes.mapContainer} ref={mapContainer}></div>
    </div>
  );
}

export default Map;
