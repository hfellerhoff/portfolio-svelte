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
</script>

<style>
</style>

<svelte:head>
  <title>Music | Henry Fellerhoff</title>
</svelte:head>

<PageHeader
  title="Music"
  subtitle="A collection of classical, popular, and original works." />

<MusicList {songs} title="Featured" featured />

<MusicList {songs} title="Recent" />
