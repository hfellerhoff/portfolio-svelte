<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let compact: boolean = false;
</script>

<style>
  div {
    margin: 4em auto 6em auto;
    max-width: 40rem;
    text-align: center;
  }

  .compact-container {
    margin: 2em auto 4em auto;
  }

  @media screen and (max-width: 600px) {
    div {
      margin: 2em auto 4em auto;
    }
  }

  div h1 {
    font-size: 2.5em;
  }

  div p {
    font-size: 1.15em;
    margin-top: 0.5em;
  }

  .compact {
    margin: 0em;
  }
</style>

<div class:compact-container={compact}>
  <h1 class:compact>{title}</h1>
  <p class:compact>{subtitle}</p>
</div>
