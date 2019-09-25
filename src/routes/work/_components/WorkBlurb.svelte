<script>
  import Markdown from '../../../components/Markdown.svelte'

  export let company = ''
  export let title = ''
  export let description = ''
</script>

<div>Company: {company}</div>
<div>Title: {title}</div>
<div>Description: {description}</div>

<Markdown render={description} />
