<script lang="ts">
  import PageList from './PageList.svelte';
  import type { Project } from '../../models/Project';

  export let projects: Project[];
  export let title: string = 'Projects';
  export let featured: boolean = false;
  export let showLink: boolean = false;
  export let exclude: string[] = [];

  projects = projects.sort((a, b) => {
    if (a.date > b.date) return -1;
    else return 1;
  });
</script>

<PageList
  contentList={projects}
  {title}
  {featured}
  {showLink}
  {exclude}
  linkText="All Projects"
  page="projects"
  primaryLink={{ accessor: 'url', label: 'Visit' }}
  secondaryLink={{ accessor: 'source', label: 'Source' }} />
