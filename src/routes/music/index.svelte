<script context="module" lang="ts">
  import PageHeader from '../../components/PageHeader.svelte';
  export function preload() {
    return this.fetch(`music.json`)
      .then((r: { json: () => any }) => r.json())
      .then((songs: Song[]) => {
        return { songs };
      });
  }
</script>

<script lang="ts">
  import MusicList from '../../components/MusicList.svelte';
  import type { Song } from '../../../models/Song';

  export let songs: Song[];
  const description = 'A collection of classical, popular, and original works.';
</script>

<style>
</style>

<svelte:head>
  <title>Music | Henry Fellerhoff</title>
  <meta name="description" content={description} />
</svelte:head>

<PageHeader title="Music" subtitle={description} />

<MusicList {songs} title="Featured" featured />

<MusicList {songs} title="Recent" />
