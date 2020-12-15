import { useRef, useState, useEffect } from "react";
import "../App.css";
import Header from "./header";
import { makeStyles } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import treeIcon from "../treeIcon.png";
import { latValidator, longValidator } from "../utils/coordValidator";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
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
        fetch(
          "https://sheet.best/api/sheets/ae0c093f-ffc7-4b6d-837e-16b6e5cdad77"
        )
          .then((response) => response.json())
          .then((data) => {
            data.forEach((row) => {
              if (latValidator(row.Latitude) && longValidator(row.Longitude)) {
                var el = document.createElement("div");
                el.className = "marker";
                let marker = new mapboxgl.Marker(el)
                  .setLngLat([row.Longitude, row.Latitude])
                  .setPopup(
                    new mapboxgl.Popup().setHTML(
                      `<h3 class="popup-header">${
                        row.Name ? row.Name : ""
                      }</h3><p class="popup-description">${
                        row.Description ? row.Description : ""
                      }</p>`
                    )
                  );
                marker.addTo(mapbox);
              }
            });
            setMap(mapbox);
            mapbox.resize();
          });
      });
      mapbox.on("click", "marker", (e) => {
        e.target.togglePopup();
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
