<script>
  import Icon from 'svelte-awesome'

  export let data = null
  if (!data) throw new Error('data prop is required')
</script>

<Icon {data} scale="2.4" />
