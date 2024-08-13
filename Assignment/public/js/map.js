document.addEventListener('DOMContentLoaded', (event) => {
  const mapDiv = document.getElementById('map');
  if (mapDiv) {
    const longitude = parseFloat(mapDiv.dataset.longitude);
    const latitude = parseFloat(mapDiv.dataset.latitude);

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYW4yNDQ1IiwiYSI6ImNsemU5N2t4OTB1bDEybXEwNGtiOG52YmQifQ.WntS_WFfxXKlYZbMFs3GpQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
      console.log('Longitude:', longitude, 'Latitude:', latitude);
  }
});
