import { DateTime } from 'luxon'
import {
  FaDocker,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaJenkins,
  FaAngular,
} from 'react-icons/fa/index.mjs'
import {
  Kubernetes,
  Redux,
  Scala,
  SqlServer,
  PostgresSql,
  MongoDb,
  ReactiveX,
  MySql,
} from '../components/missing-icons'

const icons = Object.entries({
  Kubernetes,
  Docker: FaDocker,
  Jenkins: FaJenkins,
  'Python 3': FaPython,
  'Node.js': FaNodeJs,
  AngularJS: FaAngular,
  React: FaReact,
  Redux,
  RxJS: ReactiveX,
  'PHP 7': FaPhp,
  Scala,
  'SQL Server': SqlServer,
  PostgresSQL: PostgresSql,
  MongoDB: MongoDb,
  MySQL: MySql,
}).reduce(
  (acc, [label, Icon]) => ({
    ...acc,
    [label]: {
      label,
      Icon,
    },
  }),
  {}
)

export default [
  {
    title: 'Wayfair',
    link: 'https://www.wayfair.com',
    position: 'Lead Developer',
    durations: [
      {
        begin: DateTime.fromISO('2018-03'),
        end: DateTime.fromISO('2018-09'),
      },
    ],
    description: `Designed, developed, & deployed chat bot service to answer customer questions about Wayfair products. Chat service integrated into existing help desk chat, removing some of the burden of easy to answer questions from the customer service representatives. Worked alongside data scientist who created the NLP ML models to understand human questions. My role was building a scalable python server able to handle the full load of Wayfair's customer's questions.`,
    stack: [
      icons.Kubernetes,
      icons.Docker,
      icons.Jenkins,
      icons['Python 3'],
      icons['Node.js'],
      icons.React,
      icons.Redux,
      icons['PHP 7'],
      icons['SQL Server'],
    ],
  },
  {
    title: 'CollegeAI',
    link: 'https://collegeai.com',
    position: 'Software Architect',
    durations: [
      {
        begin: DateTime.fromISO('2017-05'),
        end: DateTime.fromISO('2017-11'),
      },
    ],
    description: `First employee at CollegeAI, an RPI startup who's goal is to help high school students discover & pick the right college with confidence using machine learning. Responsibilities included maintaining & designing microservices (ML pipeline, REST APIs), designing & building UIs, creating robust college student data scrapers. Soft skill responsibilities including pitching to investors & potential partners, & fielding student questions on main-site through Intercom.`,
    stack: [
      icons.Kubernetes,
      icons.Docker,
      icons['Node.js'],
      icons.React,
      icons.Redux,
      icons.RxJS,
      icons['PostgresSQL'],
    ],
  },
  {
    title: 'Applied Visions',
    link: 'https://codedx.com',
    position: 'Softare Engineer Intern',
    durations: [
      {
        begin: DateTime.fromISO('2016-05'),
        end: DateTime.fromISO('2016-08'),
      },
      {
        begin: DateTime.fromISO('2015-05'),
        end: DateTime.fromISO('2015-08'),
      },
    ],
    description: `Interned at Code Dx (division of Applied Visions) summer 2015 and 2016. Created internal web app to organize & edit large data files. Second summer I created Scala code to ingest and structure output from PHP code linting tools. These linters are part of the  Code Dx security testing software.`,
    stack: [icons.Scala, icons['Node.js'], icons.MySQL],
  },
  {
    title: 'Bundl IvS',
    link: 'https://collabo.io',
    position: 'Software Engineer Intern',
    durations: [
      {
        begin: DateTime.fromISO('2016-01'),
        end: DateTime.fromISO('2016-05'),
      },
    ],
    description: `Spring 2016 I studied abroad at DTU in Copenhagen, Denmark! While I was there I picked up an internship working for a 3 person grad student startup. Bundl IvS (renamed to Collabo now) wants to create a supply chain management application for small businesses. I worked under their CTO building an Angular2 language translation module and built their business's landing page.
    `,
    stack: [icons['Python 3'], icons['Node.js'], icons.AngularJS],
  },
]
