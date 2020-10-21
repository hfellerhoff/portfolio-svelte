<script lang="ts">
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
    color: #403e3a;
  }

  #f {
    color: #ac96c9;
  }

  ul {
    margin: 0;
    padding: 0;
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
    color: #6c6673;
  }

  a:hover {
    background: #e8e8e8;
    color: #5a5066;
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
    background: #e8e8e8;
    color: #5a5066;
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
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'writing' ? 'page' : undefined}
        href="writing">Writing</a>
    </li> -->
  </ul>
</nav>
