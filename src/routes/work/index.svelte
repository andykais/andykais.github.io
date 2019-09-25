<script>
  import { DateTime } from 'luxon'
  import Timeline from './_components/Timeline.svelte'
  import WorkBlurb from './_components/WorkBlurb.svelte'
  import { icons } from '../../icons'

  const timeline = [
    {
      company: 'Wayfair',
      durations: [{ begin: DateTime.fromISO('2018-03'), end: DateTime.fromISO('2018-09') }]
    },
    {
      company: 'CollegeAI',
      durations:[{ begin: DateTime.fromISO('2017-05'), end: DateTime.fromISO('2017-11') }]
    }
  ]

  let active = ''
console.log(icons)
</script>

<style>
  .work {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 50px
  }

  .timeline {
    position: sticky;
    top: 0;
    padding: 10px 0;
    height: fit-content;
  }
</style>

<div class="work">
  <!-- TODO remove when mobile (or small enough screen size) -->
  <div class="timeline">
    <Timeline {timeline} {active} />
  </div>

  <div class="work-blurbs">
    <WorkBlurb
      company="Wayfair"
      link="https://wayfair.com"
      title="Lead Developer"
      description="Designed, developed, & deployed chat bot service to answer
      customer questions about Wayfair products. Chat service integrated into
      existing help desk chat, removing some of the burden of easy to answer
      questions from the customer service representatives. Worked alongside data
      scientist who created the NLP ML models to understand human questions. My role
      was building a scalable python server able to handle the full load of
      Wayfair's customer's questions."
      stack={[
      icons.Kubernetes,
      icons.Docker,
      icons.Jenkins,
      icons['Python 3'],
      icons['Node.js'],
      icons.React,
      icons.Redux,
      icons['PHP 7'],
      icons['SQL Server'],
      ]}
      bind:active={active} />

    <WorkBlurb
      company="CollegeAI"
      link="https://collegeai.com"
      title="Software Architect"
      description="First employee at CollegeAI, an RPI startup who's goal is to help high school students discover & pick the right college with confidence using machine learning. Responsibilities included maintaining & designing microservices (ML pipeline, REST APIs), designing & building UIs, creating robust college student data scrapers. Soft skill responsibilities including pitching to investors & potential partners, & fielding student questions on main-site through Intercom."
      stack={[
      icons.Kubernetes,
      icons.Docker,
      icons['Node.js'],
      icons.React,
      icons.Redux,
      icons.RxJS,
      icons['PostgreSQL'],
      ]}
      bind:active={active} />
  </div>
</div>
