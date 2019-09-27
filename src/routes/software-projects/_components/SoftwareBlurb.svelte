<script>
  import HoverAnimate from '../../../components/HoverAnimate.svelte'
  import Icon from '../../../components/Icon.svelte'
  import Markdown from '../../../components/Markdown.svelte'

  export let title = ''
  export let description = ''
  export let sources = []
</script>

<style>
  .sources {
    display: flex;
    justify-content: flex-end;
  }
  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .description {
    margin-bottom: 30px;
  }
  a {
    color: var(--primary-light);
    margin: 5px;
  }
</style>

<div class="sources">
  {#each sources as source}
    <a href={source.to} title={source.to}>
      <HoverAnimate color="var(--black)">
        <Icon data={source.icon} />
      </HoverAnimate>
    </a>
  {/each}
</div>
<div>
  <div class="title">
    <Markdown render={title} />
  </div>
  <div class="description">
    <Markdown render={description} />
  </div>
</div>
