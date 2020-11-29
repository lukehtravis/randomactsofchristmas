import { useRef, useState, useEffect } from "react";
import "../App.css";
import Header from "./header";
import { makeStyles } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { latValidator, longValidator } from "../utils/coordValidator";

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
      const mapbox = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.273225, 37.843999],
        zoom: 10,
      });

      mapbox.on("load", () => {
        fetch(
          "https://sheet.best/api/sheets/ae0c093f-ffc7-4b6d-837e-16b6e5cdad77"
        )
          .then((response) => response.json())
          .then((data) => {
            data.forEach((row) => {
              if (latValidator(row.Latitude) && longValidator(row.Longitude)) {
                let marker = new mapboxgl.Marker()
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
