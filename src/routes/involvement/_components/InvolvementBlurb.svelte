<script>
  import Markdown from '../../../components/Markdown.svelte'

  export let title, description
  export let position = null
</script>

<style>
  .involvement-blurb {
    margin-bottom: 30px;
  }
  .title {
    font-weight: bold;
    display: inline;
  }
  .description {
    margin: 10px 0;
  }
  /* :global(.description) a { */
  /*   color: var(--primary); */
  /* } */
</style>

<div class="involvement-blurb">
  <div>
    <h3 class="title">{title}</h3>
    {#if position}
      <span>| {position}</span>
    {/if}
  </div>
  <div class="description">
    <Markdown render={description} />
  </div>
</div>
