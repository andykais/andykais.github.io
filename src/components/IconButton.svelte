<script>
  import Icon from './Icon.svelte'

  export let onClick
  export let disabled = false
  export let icon
</script>

<style>
  .icon-button {
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
  }
  /* TODO push this logic into the Icon component */
  @keyframes pop {
    50% {
      transform: scale(1.1);
    }
    to {
      color: var(--primary);
    }
  }
  .icon-button:hover > .icon-wrapper {
    animation: pop 0.2s forwards;
  }
</style>

<button class="icon-button" {disabled} on:click={onClick}>
  <span class="icon-wrapper">
    <Icon data={icon} />
  </span>
</button>
