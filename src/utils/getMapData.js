const getMapData = () => {
  try {
    fetch("https://sheet.best/api/sheets/ae0c093f-ffc7-4b6d-837e-16b6e5cdad77")
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
  } catch (e) {
    console.log("error fetching data: ", e);
    return null;
  }
};
