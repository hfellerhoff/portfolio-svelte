<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let compact: boolean = false;
  export let compactMargin: boolean = false;
  export let image: string | undefined = undefined;
</script>

<style>
  #image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
    }
  }

  div {
    margin: 4em auto 6em auto;
    max-width: 40rem;
    text-align: center;
  }

  .compact-container {
    margin: 2em auto 4em auto;
  }

  div h1 {
    font-size: 2.5em;
  }

  div p {
    font-size: 1.15em;
    margin-top: 0.5em;
  }

  @media screen and (max-width: 600px) {
    div {
      margin: 2em auto 4em auto;
    }

    div h1 {
      font-size: 2em;
    }
  }

  .compact {
    margin: 0.25em auto 0.25em auto;
  }
</style>

{#if image}
  <div id="image-container"><img src={image} alt={title} /></div>
{/if}

<div class:compact-container={compact || compactMargin || image}>
  <h1 class:compact>{title}</h1>
  <p class:compact>{subtitle}</p>
</div>
