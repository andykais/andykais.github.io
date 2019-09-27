import {
  faNpm,
  faReddit,
  faGithub,
  faFacebook,
  faPhp,
  faDocker,
  faPython,
  faReact,
  faJenkins,
  faAngular,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// TODO wrap these guys in {@html svg}
import { default as Kubernetes } from '../static/missing-icons/kubernetes.svg'
import { default as Redux } from '../static/missing-icons/redux.svg'
import { default as Scala } from '../static/missing-icons/scala.svg'
import { default as SqlServer } from '../static/missing-icons/sql-server.svg'
import { default as PostgreSql } from '../static/missing-icons/postgresql.svg'
import { default as MongoDb } from '../static/missing-icons/mongodb.svg'
import { default as ReactiveX } from '../static/missing-icons/reactivex.svg'
import { default as MySql } from '../static/missing-icons/mysql.svg'

export const iconTypes = {
  FONT_AWESOME: 'FONT_AWESOME',
  RAW_SVG: 'RAW_SVG'
}

const fontAwesomeIcons = [
  {
    label: 'Link',
    icon: faLink
  },
  // brands
  {
    label: 'NPM',
    icon: faNpm
  },
  {
    label: 'Github',
    icon: faGithub
  },
  {
    label: 'Reddit',
    icon: faReddit
  },
  {
    label: 'Facebook',
    icon: faFacebook
  },
  {
    label: 'Node.js',
    icon: faNodeJs
  },
  {
    label: 'PHP 7',
    icon: faPhp
  },
  {
    label: 'Docker',
    icon: faDocker
  },
  {
    label: 'Python 3',
    icon: faPython
  },
  {
    label: 'React',
    icon: faReact
  },
  {
    label: 'Jenkins',
    icon: faJenkins
  },
  {
    label: 'AngularJS',
    icon: faAngular
  },

].map(icon => ({ ...icon, type: iconTypes.FONT_AWESOME }))

const rawSvgIcons = [
  {
    label: 'Kubernetes',
    icon: Kubernetes
  },
  {
    label: 'Redux',
    icon: Redux
  },
  {
    label: 'Scala',
    icon: Scala
  },
  {
    label: 'SQL Server',
    icon: SqlServer
  },
  {
    label: 'PostgreSQL',
    icon: PostgreSql
  },
  {
    label: 'MongoDb',
    icon: MongoDb
  },
  {
    label: 'RxJS',
    icon: ReactiveX
  },
  {
    label: 'MySQL',
    icon: MySql
  },
].map(icon => ({ ...icon, type: iconTypes.RAW_SVG }))

export const icons = [...fontAwesomeIcons, ...rawSvgIcons].reduce((acc, icon) => ({
  ...acc,
  [icon.label]: icon
}), {})
