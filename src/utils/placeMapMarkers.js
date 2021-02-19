import { latValidator, longValidator } from "./coordValidator";
export const placeMapMarkers = (data, mapbox, mapboxgl) => {
  data.forEach((row) => {
    if (latValidator(row.latitude) && longValidator(row.longitude)) {
      console.log("I'm here!");
      var el = document.createElement("div");
      el.className = "marker";
      let marker = new mapboxgl.Marker(el)
        .setLngLat([row.longitude, row.latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<h3 class="popup-header">${
              row.name ? row.name : ""
            }</h3><p class="popup-description">${
              row.description ? row.description : ""
            }</p>`
          )
        );
      marker.addTo(mapbox);
    }
  });
};
