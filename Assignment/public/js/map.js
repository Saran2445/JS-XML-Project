document.addEventListener('DOMContentLoaded', (event) => {
  const mapDiv = document.getElementById('map');
  if (mapDiv) {
    const longitude = parseFloat(mapDiv.dataset.longitude);
    const latitude = parseFloat(mapDiv.dataset.latitude);

    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
});
