<script>
  import Nav from '../components/Nav.svelte'

  export let segment
  $: routeIsIndex = !Boolean(segment)
</script>

<style>
  #app-container {
    flex-grow: 1;
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
    padding: 20px;
    margin: 0 auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px;
  }
  .home-link {
    font-family: Stalemate;
    font-size: 3em;
    color: var(--primary);
    white-space: pre;
  }
  .home-link:hover {
    color: var(--black);
  }

  footer {
    margin-top: 60px;
  }
  footer > a {
    color: var(--primary);
  }
</style>

{#if !routeIsIndex}
  <div class="header">
    <h2 class="home-link transition-color">
      <a href="/">Andrew Kaiser</a>
    </h2>
    <Nav {segment} />
  </div>
{/if}

<div id="app-container">
  <main>
    <slot />
  </main>

  <footer>
    source code on
    <a class="source-code-link" href="https://github.com/andykais/andykais.github.io">github</a>
  </footer>
</div>
