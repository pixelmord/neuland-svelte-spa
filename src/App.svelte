<script>
  import mapboxgl from 'mapbox-gl';
  import { onMount } from 'svelte';
  import { collectionData, firestore } from './firebase';
  import { startWith } from 'rxjs/operators';

  import Layout from './components/Layout.svelte';
  import MarkerPopup from './components/MarkerPopup.svelte';
  const placesRef = firestore.collection('places').orderBy('created');
  const places = collectionData(placesRef).pipe(startWith([]));

  mapboxgl.accessToken = 'pk.eyJ1IjoicGl4ZWxtb3JkIiwiYSI6ImNrODdpazd3NDAyMWQzcG4zbXBxa3g1MG0ifQ.KUT3Lkd1wZnbRHTpWm2_tw';

  const addMarker = map => places => {
    return places.map(place => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `
        <h2>${place.title}</h2>
        <p>${place.description}</p>
        `
      );
      const marker = new mapboxgl.Marker()
        .setLngLat([place.location.longitude, place.location.latitude])
        .setPopup(popup)
        .addTo(map);

      return marker;
    });
  };
  onMount(() => {
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay',
      center: [39.29450758895757, -6.097349930107683],
      zoom: 8,
    });
    places.subscribe(addMarker(map));
    map.on('dblclick', e => {
      console.log(e);
    });
  });
</script>

<Layout>
  <div id="map" class="map"></div>
</Layout>

<style>
  main {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
  }
  .map {
    width: 100%;
    height: 100vh;
  }
</style>
