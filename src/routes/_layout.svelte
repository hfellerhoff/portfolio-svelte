<script lang="ts">
  import Nav from '../components/Nav.svelte';

  export let segment: string;
</script>

<style>
  div {
    min-height: 100vh;
  }

  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<div>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
