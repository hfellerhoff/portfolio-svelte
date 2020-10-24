<style>
  #markdown-content {
    max-width: 48em;
    margin: 0 auto 4em auto;
  }

  #markdown-content :global(h1, h2) {
    border-bottom: 2px solid var(--divider);
    border-radius: 1px;
    margin: 2em 0em 0.5em 0em;
  }

  #markdown-content :global(h3) {
    margin: 0em 0em 0.25em 0em;
  }
  #markdown-content :global(h4, h5, h6) {
    margin: 0.25em 0em 0.25em 0em;
  }

  #markdown-content :global(p) {
    margin: 0em 0 1em 0;
  }

  #markdown-content :global(ul) {
    line-height: 1.5;
    padding-left: 1em;
  }

  #markdown-content :global(li) {
    margin: 0 0 0.5em 0;
  }

  #markdown-content :global(a) {
    color: var(--link);
    font-weight: 700;
    text-decoration: none;
  }
  #markdown-content :global(code) {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1em - 2px);
    color: var(--code);
    background-color: var(--code-background);
    border: 1px solid var(--code-border);
    padding: 0.2em 0.4em;
    border-radius: 5px;
  }

  :global(#markdown-content a:hover) {
    color: var(--link-hover);
  }
</style>

<div id="markdown-content">
  <slot />
</div>
