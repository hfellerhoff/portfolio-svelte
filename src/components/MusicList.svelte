<script context="module" lang="ts">
  import type { Song } from '../../models/Song';
</script>

<script lang="ts">
  export let songs: Song[];
  export let title: string = 'Music';
  export let featured: boolean = false;
  export let showLink: boolean = false;

  songs = songs.sort((a, b) => {
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

  #icon {
    font-size: 2em;
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
  @media screen and (max-width: 600px) {
    #link-container {
      display: none;
    }
  }

  .listen-link {
    display: inline;
    background: #b194cd;
    color: #ffffff;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
  }

  .listen-link:hover {
    background: #9b6acd;
  }

  .listen-link--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: all;
  }
</style>

<section>
  <div id="title-container">
    <h2>{title}</h2>
    {#if showLink}<a href="music">All Music →</a>{/if}
  </div>
  <ul>
    {#each songs as song}
      <!-- we're using the non-standard `rel=prefetch` attribute to
              tell Sapper to load the data for the page as soon as
              the user hovers over the link or taps it, instead of
              waiting for the 'click' event -->
      {#if !featured || (featured && song.featured)}
        <li>
          <a id="item" rel="prefetch" href="music/{song.slug}">
            <div id="flex">
              {#if song.icon}
                <h6 id="icon">{song.icon}</h6>
              {/if}
              <div id="text-container">
                <h3>{song.title}</h3>
                <p>
                  {song.work ? `${song.composer} • ${song.work}` : song.composer}
                </p>
              </div>
            </div>
          </a>
          <div id="link-container">
            {#if song.url}
              <a
                href={song.url}
                target="_black"
                rel="noopener noreferrer"
                class="listen-link">Listen</a>
            {:else}
              <div class="listen-link listen-link--disabled">Listen</div>
            {/if}
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</section>
