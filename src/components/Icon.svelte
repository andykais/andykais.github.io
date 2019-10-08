<script>
  import { iconTypes } from '../icons'

  export let data
  if (!data) throw new Error('`data` prop is required')
</script>

<style>
  .icon {
    display: inline-block;
    width: 36px;
    height: 36px;
  }
</style>

<div class="icon">
  {#if data.type == iconTypes.FONT_AWESOME}
    <svg
      version="1.1"
      class="icon"
      role="presentation"
      fill="currentColor"
      viewBox={`0 0 ${data.icon.icon[0]} ${data.icon.icon[1]}`}>
      <path key="path-0" d={data.icon.icon[4]} />
    </svg>
  {:else if data.type == iconTypes.RAW_SVG}
    {@html data.icon}
  {/if}
</div>
