<script>
  import Icon from '../../../components/Icon.svelte'

  export let title = ''
  export let description = ''
</script>

<div>Title: {title}</div>
<div>Description: {description}</div>
<slot />
