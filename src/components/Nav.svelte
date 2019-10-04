<script>
  export let segment

  const pages = [
    { link: 'work', text: 'work' },
    { link: 'software-projects', text: 'software projects' },
    { link: 'involvement', text: 'involvement' }
  ]
</script>

<style>
  nav {
    text-align: left;
    /* display: inline-block; */
    display: inline-flex;
    flex-wrap: wrap;
  }
  a {
    margin: 0 10px;
    color: var(--black);
    padding: 5px 5px 3px;
    border-bottom: 2px solid var(--primary-light);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    white-space: pre;
  }
  .link:hover {
    color: var(--primary);
  }
  .active {
    background-color: var(--grey-light);
  }
</style>

<nav>
  {#each pages as { link, text }}
    <a class={segment === link ? 'active' : ''} href={link}>
      <span class="link transition-color">{text}</span>
    </a>
  {/each}
  <span>
    <!-- not sure why this is needed, but <a/>'s have extra padding when its not present -->
  </span>
</nav>
