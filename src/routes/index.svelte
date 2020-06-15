<script>
  import { icons } from '../icons'
  import Icon from '../components/Icon.svelte'
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
    height: 100%;
    display: flex;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 480px) {
    .home-container {
      align-items: center;
    }
  }
  .name {
    font-family: Stalemate;
    color: var(--primary);
    white-space: pre;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
  .icon {
    margin-right: 10px;
  }
  @keyframes pop {
    50% {
      transform: scale(1.1);
    }
    to {
      color: var(--primary);
    }
  }
  .creative-space {
    display: flex;
    align-items: center;
    padding: 5px 0;
  }
  .creative-space:hover > .icon {
    animation: pop 0.2s forwards;
  }
</style>

<svelte:head>
  <title>Andrew Kaiser</title>
</svelte:head>

<div class="home-container">
  <div class="navigation">
    <h1 class="name">Andrew Kaiser</h1>
    <Nav segment={undefined} />
    <ul>
      {#each creativeSpaces as { source, link }}
        <li>
          <a class="creative-space" href={link}>
            <span class="icon transition-color">
              <Icon data={source} />
            </span>
            <span>{source.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
