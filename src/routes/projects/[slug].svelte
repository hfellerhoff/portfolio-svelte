<script context="module" lang="ts">
  export async function preload({ params }) {
    const projects: Project[] = await this.fetch(
      `projects.json`
    ).then((r: { json: () => any }) => r.json());

    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data, projects };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import type { Project } from '../../../models/Project';
  import Button from '../../components/Button.svelte';
  import MarkdownContent from '../../components/MarkdownContent.svelte';
  import PageHeader from '../../components/PageHeader.svelte';
  import ProjectList from '../../components/ProjectList.svelte';

  export let project: Project;
  export let projects: Project[];
</script>

<style>
  #link-container {
    margin: -3em auto 4em auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>{project.title} | Projects</title>
  <meta name="description" content={project.subtitle} />
</svelte:head>

<PageHeader
  title={project.title}
  subtitle={project.subtitle}
  image={`projects/${project.image}`}
  compact />

<div id="link-container">
  <Button href={project.url} label="Visit" />
  <Button href={project.source} label="Source" type="secondary" />
</div>

<MarkdownContent>
  {@html project.html}
</MarkdownContent>

<ProjectList
  title="Other Projects"
  exclude={[project.title]}
  {projects}
  showLink />
