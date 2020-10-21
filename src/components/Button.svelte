<script lang="ts">
  export let type: 'primary' | 'secondary' = 'primary';
  export let href: string | undefined;
  export let label: string;
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
    background: #a976d9;
  }

  .primary:hover {
    background: #944ad9;
  }

  .secondary {
    margin-left: 0.5em;
    background: #403e3a;
  }

  .secondary:hover {
    background: #262014;
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
