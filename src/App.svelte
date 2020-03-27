<script>
  import mapboxgl from 'mapbox-gl';
  import { onMount } from 'svelte';

  import Layout from './components/Layout.svelte';
  mapboxgl.accessToken = 'pk.eyJ1IjoicGl4ZWxtb3JkIiwiYSI6ImNrODdpazd3NDAyMWQzcG4zbXBxa3g1MG0ifQ.KUT3Lkd1wZnbRHTpWm2_tw';
  onMount(() => {
    // eslint-disable-next-line no-unused-vars
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay',
    });
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
