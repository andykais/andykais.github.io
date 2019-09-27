<script>
  import Icon from '../../../components/Icon.svelte'
  import Markdown from '../../../components/Markdown.svelte'

  export let company, title, link, description, active, stack

  const handleMouseEnter = e => {
    active = company
  }
</script>

<style>
  .work-blurb {
    margin-bottom: 30px;
  }
  .company {
    font-weight: bold;
    display: inline;
  }
  .work-blurb:hover .company {
    text-decoration: underline;
  }
  .description {
    margin: 10px 0;
  }
  .skill {
    display: inline-block;
    margin: 0 5px;
  }
</style>

<div class="work-blurb" on:mouseenter={handleMouseEnter}>
  <div>
    <a href={link}>
      <h3 class="company">{company}</h3>
    </a>
    <span>| {title}</span>
  </div>
  <div class="description">
    <Markdown render={description} />
  </div>

  {#each stack as skill}
    <span class="skill" title={skill.label}>
      <Icon data={skill} />
    </span>
  {/each}
</div>
