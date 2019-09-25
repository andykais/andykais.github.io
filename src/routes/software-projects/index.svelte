<script>
  import SoftwareBlurb from './_components/SoftwareBlurb.svelte'
  import Icon from '../../components/Icon.svelte'
  import { reddit } from 'svelte-awesome/icons'
  import { faNpm } from '@fortawesome/free-brands-svg-icons'
</script>

<SoftwareBlurb
  title="bitwarden-dmenu"
  description="dmenu cli app for bitwarden which can copy usernames, passwords, and various fields
  to your clipboard.">
  <a href="https://www.reddit.com/r/Bitwarden/comments/9fc3m9/bitwarden_dmenu/"><Icon data={reddit} /></a>
  <a href="https://www.npmjs.com/package/bitwarden-dmenu"><Icon data={faNpm} /></a>
</SoftwareBlurb>
