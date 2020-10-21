<script context="module" lang="ts">
  export async function preload({ params }) {
    const songs: Song[] = await this.fetch(
      `music.json`
    ).then((r: { json: () => any }) => r.json());

    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`music/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { song: data, songs };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import type { Song } from '../../../models/Song';
  import MusicList from '../../components/MusicList.svelte';
  import PageHeader from '../../components/PageHeader.svelte';

  export let song: Song;
  export let songs: Song[];
  const getSubtitle = (work: undefined | string, composer: string) =>
    work ? `${composer} • ${work}` : composer;
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

  #video {
    margin: 0em auto 4em auto;
    max-width: 48em;
  }
</style>

<svelte:head>
  <title>{song.title} | {song.composer}</title>
  <meta
    name="description"
    content={`Performance of ${song.title} by Henry Fellerhoff.`} />
</svelte:head>

<PageHeader
  title={song.title}
  subtitle={getSubtitle(song.work, song.composer)}
  compact />

{#if song.youtubeEmbedUrl}
  <div style="--aspect-ratio: 16/9;" id="video">
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

<MusicList title="Other Music" exclude={[song.title]} {songs} showLink />

<!-- {#if song.html}
  <div class="content">
    {@html song.html}
  </div>
{/if} -->
