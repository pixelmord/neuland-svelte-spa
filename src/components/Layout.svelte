<script>
  import Nav from './Nav.svelte';

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style lang="scss" global>
  @import '../prestyled/style/global.scss';
</style>
