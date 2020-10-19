<script context="module" lang="ts">
  import ProjectList from '../components/ProjectList.svelte';
  import MusicList from '../components/MusicList.svelte';
  import type { Project } from '../../models/Project';
  import type { Song } from '../../models/Song';

  export async function preload() {
    const projects: Project[] = await this.fetch(
      `projects.json`
    ).then((r: { json: () => any }) => r.json());

    const songs: Song[] = await this.fetch(
      `music.json`
    ).then((r: { json: () => any }) => r.json());

    return { projects, songs };
  }
</script>

<script lang="ts">
  export let projects: Project[];
  export let songs: Song[];
</script>

<style>
  .hero {
    margin: 6em auto 8em auto;
    max-width: 32rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.5em;
  }

  .hero p {
    font-size: 1.15em;
    margin-bottom: 0.5em;
  }
</style>

<svelte:head>
  <title>Henry Fellerhoff</title>
</svelte:head>

<div class="hero">
  <p>Henry Fellerhoff is a Chicago-based</p>
  <h1>Developer, vocalist, and bagel lover.</h1>
</div>

<ProjectList featured {projects} showLink />

<MusicList featured {songs} showLink />
