<script context="module" lang="ts">
  import PageHeader from '../../components/PageHeader.svelte';
  export function preload() {
    return this.fetch(`about.json`)
      .then((r: { json: () => any }) => r.json())
      .then((about: any) => {
        return { about };
      });
  }
</script>

<script lang="ts">
  import MarkdownContent from '../../components/MarkdownContent.svelte';

  export let about: any;
</script>

<svelte:head>
  <title>About | Henry Fellerhoff</title>
</svelte:head>

<PageHeader title={about.title} subtitle={about.subtitle} image={about.image} />

<MarkdownContent>
  {@html about.html}
</MarkdownContent>
