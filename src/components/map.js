import { useRef, useState, useEffect, createContext } from "react";
import "../App.css";
import Header from "./header";
import { makeStyles } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import treeIcon from "../treeIcon.png";
import { getMapData } from "../utils/getMapData";
import FormContainer from "./formContainer";
import { MapContext } from "./mapContext";

const useStyles = makeStyles((theme) => {
  return {
    mapContainer: (props) => ({
      position: "fixed",
      width: "100vw",
      height: "100vh",
      "& .marker": (props) => ({
        backgroundImage: `url(${treeIcon})`,
        backgroundSize: "cover",
        width: "35px",
        height: "35px",
        cursor: "pointer",
      }),
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
    }),
  };
});

function Map() {
  const { REACT_APP_MAPBOX } = process.env;
  let [mapOrigin, setMapOrigin] = useState([-122.273225, 37.843999]);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  let [formVisible, setFormVisible] = useState(false);
  let [addActCoords, setAddActCoords] = useState({});
  const classes = useStyles({ formVisible });

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

  if (map) {
    map.on("click", (event) => {
      if (formVisible) {
        setAddActCoords(event.lngLat);
      }
    });
  }

  return (
    <div className={classes.background}>
      <Header isTransparent={false} />
      <div
        data-testid="map"
        className={classes.mapContainer}
        ref={mapContainer}
      ></div>
      <MapContext.Provider
        value={{
          getMapData: getMapData,
          mapboxgl: mapboxgl,
          map: map,
          setMap: setMap,
        }}
      >
        <FormContainer
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          addActCoords={addActCoords}
        />
      </MapContext.Provider>
    </div>
  );
}

export default Map;
