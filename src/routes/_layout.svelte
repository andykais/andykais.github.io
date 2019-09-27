<script>
  import HoverAnimate from '../components/HoverAnimate.svelte'
  import Nav from '../components/Nav.svelte'

  export let segment
  $: routeIsIndex = !Boolean(segment)
</script>

<style>
  main {
    position: relative;
    /* max-width: 56em; */
    /* background-color: white; */
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .home-link {
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
</style>

{#if !routeIsIndex}
  <div class="header">
    <h2 class="home-link">
      <a href="/">
        <HoverAnimate color="var(--black)">Andrew Kaiser</HoverAnimate>
      </a>
    </h2>
    <Nav {segment} />
  </div>
{/if}

<main>
  <slot />
</main>
