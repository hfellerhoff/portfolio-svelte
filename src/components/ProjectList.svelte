<script context="module" lang="ts">
  import type { Project } from '../../models/Project';
</script>

<script lang="ts">
  export let projects: Project[];
  export let title: string = 'Projects';
  export let featured: boolean = false;
  export let showLink: boolean = false;

  projects = projects.sort((a, b) => {
    if (a.date > b.date) return -1;
    else return 1;
  });
</script>

<style>
  section {
    margin: 2em auto 4em auto;
    max-width: 48em;
  }

  #item {
    flex: 1;
  }

  #title-container {
    border-bottom: 1.5px solid #b4b4b4;
    padding-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #title-container a {
    color: #572795;
  }
  #title-container a:hover {
    text-decoration: underline;
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

  #text-container {
    margin-left: 1.25em;
  }

  #text-container h3 {
    margin: 0;
  }
  #text-container p {
    margin: 0;
  }

  img {
    height: 3em;
    width: 3em;
    border-radius: 50%;
  }

  @media screen and (max-width: 600px) {
    #link-container {
      display: none;
    }
  }

  .visit-link {
    display: inline;
    background: #b194cd;
    color: #ffffff;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
  }

  .visit-link:hover {
    background: #9b6acd;
  }

  .source-link {
    display: inline;
    margin-left: 0.5em;
    background: #403e3a;
    color: #ffffff;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
  }

  .source-link:hover {
    background: #262014;
  }

  .visit-link--disabled,
  .source-link--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: all;
  }
</style>

<section>
  <div id="title-container">
    <h2>{title}</h2>
    {#if showLink}<a href="projects">All Projects →</a>{/if}
  </div>
  <ul>
    {#each projects as project}
      <!-- we're using the non-standard `rel=prefetch` attribute to
              tell Sapper to load the data for the page as soon as
              the user hovers over the link or taps it, instead of
              waiting for the 'click' event -->
      {#if !featured || (featured && project.featured)}
        <li>
          <a id="item" rel="prefetch" href="projects/{project.slug}">
            <div id="flex">
              <img src={`projects/${project.logo}`} alt={project.title} />
              <div id="text-container">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </div>
          </a>
          <div id="link-container">
            {#if project.url}
              <a
                href={project.url}
                target="_black"
                rel="noopener noreferrer"
                class="visit-link">Visit</a>
            {:else}
              <div class="visit-link visit-link--disabled">Visit</div>
            {/if}
            {#if project.source}
              <a
                href={project.source}
                target="_black"
                rel="noopener noreferrer"
                class="source-link">Source</a>
            {:else}
              <div class="source-link source-link--disabled">Source</div>
            {/if}
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</section>
