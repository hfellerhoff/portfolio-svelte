<script context="module" lang="ts">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`music/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { song: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import type { Song } from '../../../models/Song';
  import PageHeader from '../../components/PageHeader.svelte';

  export let song: Song;
  const subtitle = song.work
    ? `${song.composer} • ${song.work}`
    : song.composer;
</script>

<style>
  [style*='--aspect-ratio'] > :first-child {
    width: 100%;
  }
  @supports (--custom: property) {
    [style*='--aspect-ratio'] {
      position: relative;
    }
    [style*='--aspect-ratio']::before {
      content: '';
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*='--aspect-ratio'] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{song.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  /* .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  } */
</style>

<svelte:head>
  <title>{song.title} | {song.composer}</title>
</svelte:head>

<PageHeader title={song.title} {subtitle} compact />

{#if song.youtubeEmbedUrl}
  <div style="--aspect-ratio: 16/9;">
    <iframe
      title={`YouTube video of ${song.title}`}
      width="1600"
      height="900"
      src={song.youtubeEmbedUrl}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </div>
{/if}

<!-- {#if song.html}
  <div class="content">
    {@html song.html}
  </div>
{/if} -->
