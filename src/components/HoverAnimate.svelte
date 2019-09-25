<script>
  export let color
</script>

<style>
  .animate {
    transition: color 0.5s ease;
  }
  .animate:hover {
    color: var(--color);
  }
</style>

<div class="animate" style={color ? `--color: ${color}` : ''}>
  <slot>we should have stuff</slot>
</div>
