<style>
  #markdown-content {
    max-width: 48em;
    margin: 0 auto 4em auto;
  }

  #markdown-content :global(h1, h2) {
    border-bottom: 2px solid #d5d9df;
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
    color: #9c4ee6;
    font-weight: 700;
    text-decoration: none;
  }
  #markdown-content :global(code) {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1em - 2px);
    color: #1b1d26;
    background-color: #f6f8fb;
    border: 1px solid #d5d9df;
    padding: 0.2em 0.4em;
    border-radius: 5px;
  }

  :global(#markdown-content a:hover) {
    color: #8620e6;
  }
</style>

<div id="markdown-content">
  <slot />
</div>
