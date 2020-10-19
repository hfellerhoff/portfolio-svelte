<script context="module" lang="ts">
  import PageHeader from '../../components/PageHeader.svelte';
  import type { Project } from '../../../models/Project';

  export function preload() {
    return this.fetch(`projects.json`)
      .then((r: { json: () => any }) => r.json())
      .then((projects: Project[]) => {
        return { projects };
      });
  }
</script>

<script lang="ts">
  import ProjectList from '../../components/ProjectList.svelte';

  export let projects: Project[];
</script>

<style>
</style>

<svelte:head>
  <title>Projects | Henry Fellerhoff</title>
</svelte:head>

<PageHeader
  title="Projects"
  subtitle="Projects that strive to improve the world, one line of code at a time." />

<ProjectList title="Featured" {projects} featured />

<ProjectList title="Recent" {projects} />
