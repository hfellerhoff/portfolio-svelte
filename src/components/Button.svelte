<script lang="ts">
  export let type: 'primary' | 'secondary' = 'primary';
  export let href: string | undefined;
  export let label: string;

  const primaryColor = type === 'primary' ? '#a976d9' : '#403e3a';
  const primaryColorHover = type === 'primary' ? '#944ad9' : '#262014';
  const secondaryColor = type === 'primary' ? '#a976d9' : '#403e3a';
  const secondaryColorHover = type === 'primary' ? '#944ad9' : '#262014';
</script>

<style>
  a,
  div {
    display: inline;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    user-select: none;
  }
  .primary {
    /* background: #a976d9; */
    background: var(--button-primary);
  }

  .primary:hover {
    /* background: #944ad9; */
    background: var(--button-primary-hover);
  }

  .secondary {
    margin-left: 0.5em;
    /* background: #403e3a; */
    background: var(--button-secondary);
  }

  .secondary:hover {
    /* background: #262014; */
    background: var(--button-secondary-hover);
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: all;
  }
</style>

{#if href}
  <a {href} target="_black" rel="noopener noreferrer" class={type}>{label}</a>
{:else}
  <div class={type} class:disabled={!href}>{label}</div>
{/if}
