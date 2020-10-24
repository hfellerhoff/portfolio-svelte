<script lang="ts">
  import type { Content } from '../../models/Content';
  import Button from '../components/Button.svelte';

  type Link = { accessor?: string; label: string } | null;

  export let contentList: Content[];
  export let title: string;
  export let linkText: string = 'All Content';
  export let page: string;
  export let featured: boolean = false;
  export let showLink: boolean = false;
  export let primaryLink: Link = null;
  export let secondaryLink: Link = null;
  export let exclude: string[] = [];

  const processContent = (incomingContent: Content[]) => {
    incomingContent = incomingContent.filter(
      (content) => !content.hidden && !exclude.includes(content.title)
    );

    incomingContent = incomingContent.sort((a, b) => {
      if (a.date > b.date) return -1;
      else return 1;
    });

    return incomingContent;
  };
</script>

<style>
  section {
    margin: 2em auto 4em auto;
    max-width: 48em;
  }

  .item {
    flex: 1;
  }

  #top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #b4b4b4;
  }

  #title {
    border-bottom: none;
    margin: 0.5em 0 0.25em 0;
  }

  #top-container a {
    color: var(--link);
  }
  #top-container a:hover {
    text-decoration: underline;
  }

  .icon {
    font-size: 2em;
    margin: 0;
  }

  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5em 0em;
  }

  #flex {
    display: flex;
  }

  a {
    text-decoration: none;
    transition: 0.1s;
  }

  img {
    height: 3em;
    width: 3em;
    min-height: 3em;
    min-width: 3em;
    border-radius: 50%;
  }

  #text-container {
    margin-left: 1.25em;
  }

  #text-container h3 {
    margin: 0;
  }
  #text-container p {
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    #link-container {
      display: none;
    }
  }

  a:hover h3,
  a:hover p {
    color: var(--link);
  }
</style>

<section>
  <div id="top-container">
    <h2 id="title">{title}</h2>
    {#if showLink}<a href={page}>{linkText} →</a>{/if}
  </div>
  <ul>
    {#each processContent(contentList) as content}
      {#if !featured || (featured && content.featured)}
        <li>
          <a class="item" rel="prefetch" href="{page}/{content.slug}">
            <div id="flex">
              {#if content.image}
                <img src={`${page}/${content.image}`} alt={content.title} />
              {/if}
              {#if content.icon}
                <p class="icon">{content.icon}</p>
              {/if}
              <div id="text-container">
                <h3>{content.title}</h3>
                <p>{content.subtitle}</p>
              </div>
            </div>
          </a>
          <div id="link-container">
            {#if primaryLink}
              <Button
                href={content[primaryLink.accessor] || undefined}
                label={primaryLink.label} />
            {/if}
            {#if secondaryLink}
              <Button
                type="secondary"
                href={content[secondaryLink.accessor] || undefined}
                label={secondaryLink.label} />
            {/if}
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</section>
