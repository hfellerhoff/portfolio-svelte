<script context="module" lang="ts">
  import PageHeader from '../../components/PageHeader.svelte';
  export function preload() {
    return this.fetch(`writing.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: { slug: string; title: string; html: any }[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: { slug: string; title: string; html: any }[];
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Writing | Henry Fellerhoff</title>
</svelte:head>

<PageHeader
  title="Writing"
  subtitle="A collection of thoughts on technology, music, and the world at large." />

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li><a rel="prefetch" href="writing/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
