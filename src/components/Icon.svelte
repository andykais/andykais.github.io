<script>
  export let data = null
  if (!data) throw new Error('`data` prop is required')
</script>

<style>
  .icon {
    /* font-size: 2.4em; */
  }
</style>

<svg
  version="1.1"
  class="icon"
  role="presentation"
  width="38.4"
  height="38.4"
  fill="currentColor"
  viewBox={`0 0 ${data.icon[0]} ${data.icon[1]}`}>
  <path key="path-0" d={data.icon[4]} />
</svg>
