<script>
  import { icons } from '../icons'
  import Icon from '../components/Icon.svelte'
  import HoverAnimate from '../components/HoverAnimate.svelte'
  import Nav from '../components/Nav.svelte'
  const creativeSpaces = [
    {
      source: icons.Github,
      link: 'https://github.com/andykais'
    },
    {
      source: icons.LinkedIn,
      link: 'https://linkedin.com/in/kaisea'
    },
    {
      source: icons.Flickr,
      link: 'https://www.flickr.com/photos/andykais'
    },
    {
      source: icons.Resume,
      // links to '../static/resume.pdf'
      link: 'resume.pdf'
    }
  ]
</script>

<style>
  .home-container {
    text-align: center;
  }
  /* @media (min-width: 480px) { */
  /*   h1 { */
  /*     font-size: 4em; */
  /*   } */
  /* } */
  .name {
    font-family: Stalemate;
    color: var(--primary);
    white-space: pre;
  }
  /* TODO animate this nicely */
  .creative-space:hover > .icon {
    color: var(--primary);
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="home-container">
  <h1 class="name">Andrew Kaiser</h1>
  <Nav segment={undefined} />
</div>

<ul>
  {#each creativeSpaces as { source, link }}
    <li>
      <a class="creative-space" href={link}>
        <span class="icon">
          <Icon data={source} />
        </span>
        <span>{source.label}</span>
      </a>
    </li>
  {/each}
</ul>
