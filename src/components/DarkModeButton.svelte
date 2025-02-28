<script lang="ts">
  import { fade } from 'svelte/transition';
  import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte';
  import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte';

  type ColorMode = 'light' | 'dark';
  let theme: ColorMode = 'dark';

  const getPrefersDarkMode = () =>
    window ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;

  const getStoredTheme = () =>
    localStorage.getItem('theme') as ColorMode | undefined;

  const setLightTheme = () => {
    document.body.classList.toggle('theme--light', true);
    document.body.classList.toggle('theme--dark', false);
    theme = 'light';
  };

  const setDarkTheme = () => {
    document.body.classList.toggle('theme--light', false);
    document.body.classList.toggle('theme--dark', true);
    theme = 'dark';
  };

  const checkTheme = () => {
    const storedTheme = getStoredTheme();

    if (storedTheme === 'light') setLightTheme();
    else if (storedTheme === 'dark') setDarkTheme();
    else if (document.body.classList.contains('theme--light')) setLightTheme();
    else if (document.body.classList.contains('theme--light')) setDarkTheme();
    else if (getPrefersDarkMode()) setDarkTheme();
    else setLightTheme();
  };

  const toggleColorMode = () => {
    if (theme === 'light') {
      setDarkTheme();
    } else if (theme === 'dark') {
      setLightTheme();
    }

    theme = document.body.classList.contains('theme--light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  };
</script>

<style>
  button {
    text-decoration: none;
    transition: 0.1s;
    padding: 0.75em 1.5em;
    border-radius: 4px;
    font-weight: 600;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: var(--background-hover);
  }
  button > div {
    height: 1.25rem;
    width: 1.25rem;
    color: var(--text-nav);
  }

  @media screen and (max-width: 600px) {
    button > div {
      height: 1.15rem;
      width: 1.15rem;
    }
  }
</style>

<button
  on:click={toggleColorMode}
  use:checkTheme
  aria-label="toggle color mode">
  <div in:fade>
    {#if theme === 'light'}
      <IoIosMoon />
    {:else}
      <IoIosSunny />
    {/if}
  </div>
</button>
