<script lang="ts">
  import PageList from './PageList.svelte';
  import type { Song } from '../../models/Song';

  export let songs: Song[];
  export let title: string = 'Music';
  export let featured: boolean = false;
  export let showLink: boolean = false;
  export let exclude: string[] = [];

  const processSongs = (processedSongs: Song[]) => {
    processedSongs = processedSongs.sort((a, b) => {
      if (a.date > b.date) return -1;
      else return 1;
    });

    processedSongs = processedSongs.map((song) => ({
      ...song,
      subtitle: song.work ? `${song.composer} • ${song.work}` : song.composer,
    }));

    return processedSongs;
  };
</script>

<PageList
  contentList={processSongs(songs)}
  {title}
  {featured}
  {showLink}
  {exclude}
  linkText="All Music"
  page="music"
  primaryLink={{ accessor: 'url', label: 'Listen' }} />
