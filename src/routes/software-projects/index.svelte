<script>
  import SoftwareBlurb from './_components/SoftwareBlurb.svelte'
  import { icons } from '../../icons.js'
</script>

<style>
  .software-projects {
    display: grid;
    grid-template-columns: [left] auto [right] 1fr;
    grid-template-rows: auto;
    grid-column-gap: 10px;
  }
</style>

<div class="software-projects">
  <SoftwareBlurb
    title="bitwarden-dmenu"
    description="dmenu cli app for bitwarden which can copy usernames,
    passwords, and various fields to your clipboard."
    sources={[{ to: 'https://reddit.com/r/Bitwarden/comments/9fc3m9/bitwarden_dmenu', icon: icons['Reddit'] }, { to: 'https://npmjs.com/package/bitwarden-dmenu', icon: icons['NPM'] }]} />

  <SoftwareBlurb
    title="scrape-pages"
    description="generalized scraping library that uses a single config object
    for any site that can be statically scraped."
    sources={[{ to: 'https://npmjs.com/package/scrape-pages', icon: icons['NPM'] }]} />

  <SoftwareBlurb
    title="i3status-rx"
    description="i3wm status bar written using rxjs and asynchronous shell
    commands. It attempts to do as little work as possible as infrequently as
    possible."
    sources={[{ to: 'https://npmjs.com/package/i3status-rx', icon: icons['NPM'] }]} />

  <SoftwareBlurb
    title="Kaiser Engineering"
    description="set of digital & LED guages running from microcontrollers that
    respond to a vehicle's OBD-II port. I am not the lead engineer but a
    prototyper for the digital gauge code written in Python 3 and OpenGL."
    sources={[{ to: 'https://www.facebook.com/KaiserEngineering', icon: icons['Facebook'] }, { to: 'https://www.kaiserengineering.io', icon: icons['Link'] }]} />

  <SoftwareBlurb
    title="telebum"
    description="tv show & movie organizer app. Keep track of shows currently in
    progress, new episodes, create group watching sessions with facebook
    friends."
    sources={[{ to: 'https://github.com/andykais/telebum2', icon: icons['Github'] }, { to: 'http://telebum.herokuapp.com', icon: icons['Link'] }]} />

  <SoftwareBlurb
    title="Painting<sub>2</sub>"
    description="client side attempt to render any and all images possible for a
    given width and height. Essentially view any pixel color combination for a
    resolution, which has a space of _(width_ &times;
    _height)_^<sup>3&times;256</sup> images. RPI software design & doc semester
    project."
    sources={[{ to: 'https://github.com/andykais/painting-base2', icon: icons['Github'] }]} />

  <SoftwareBlurb
    title="fractal generators"
    description="early tinkerings with fractals and the Processing language
    yielded some beautiful interactive fractal generators."
    sources={[{ to: 'https://github.com/andykais/InputTriangle', icon: icons['Github'] }, { to: 'https://andykais.com/projects', icon: icons['Link'] }]} />
</div>
