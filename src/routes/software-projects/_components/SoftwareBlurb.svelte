<script>
  import Icon from '../../../components/Icon.svelte'
  import Markdown from '../../../components/Markdown.svelte'

  export let title, description, sources
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
  .icon-link {
    color: var(--primary-light);
    margin: 5px;
  }
  .icon-link:hover {
    color: var(--black);
  }
</style>

<div class="sources">
  {#each sources as source}
    <a class="icon-link transition-color" href={source.to} title={source.to}>
      <Icon data={source.icon} />
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
