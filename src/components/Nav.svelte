<script lang="ts">
  import DarkModeButton from './DarkModeButton.svelte';

  export let segment: string;
</script>

<style>
  nav {
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    nav {
      padding: 0.5em 1em;
    }
  }

  h1 {
    margin: 0;
  }

  #logo {
    margin-left: -0.5em;
  }

  #h {
    color: var(--text);
  }

  #f {
    color: var(--button-primary);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    margin-left: 2em;
    display: inline-block;
  }

  a {
    text-decoration: none;
    display: block;
    transition: 0.1s;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 600;
    color: var(--text-nav);
  }

  a:hover {
    background: var(--background-hover);
    color: var(--text-nav-hover);
  }

  @media screen and (max-width: 600px) {
    li {
      margin-left: 0em;
      font-size: 0.9em;
      font-weight: 400;
    }
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    background: var(--background-hover);
    color: var(--text-nav-hover);
    border-radius: 4px;
  }
</style>

<nav>
  <a href="." id="logo">
    <h1><span id="h">H</span><span id="f">F</span></h1>
  </a>
  <ul>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">About</a>
    </li>
    <li>
      <a
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects">Projects</a>
    </li>
    <li>
      <a
        aria-current={segment === 'music' ? 'page' : undefined}
        href="music">Music</a>
    </li>
    <li>
      <DarkModeButton />
    </li>
  </ul>
</nav>
