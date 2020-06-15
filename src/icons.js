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
  faNodeJs,
  faFlickr,
  faLinkedin,
  faArrowRightBoldCircleOutline
} from '@fortawesome/free-brands-svg-icons'
import { faLink, faFileAlt, faArrowAltCircleRight, faArrowAltCircleLeft  } from '@fortawesome/free-solid-svg-icons'

// TODO this is actually pretty inefficient since every page now has to load all the svgs (I think?)
// we could create an export for each one
import { default as Kubernetes } from '../static/missing-icons/kubernetes.svg'
import { default as Redux } from '../static/missing-icons/redux.svg'
import { default as Scala } from '../static/missing-icons/scala.svg'
import { default as SqlServer } from '../static/missing-icons/sql-server.svg'
import { default as PostgreSql } from '../static/missing-icons/postgresql.svg'
import { default as MongoDb } from '../static/missing-icons/mongodb.svg'
import { default as ReactiveX } from '../static/missing-icons/reactivex.svg'
import { default as MySql } from '../static/missing-icons/mysql.svg'
import { default as RotateRight } from '../static/missing-icons/rotate-right.svg'
import { default as RotateLeft } from '../static/missing-icons/rotate-left.svg'

export const iconTypes = {
  FONT_AWESOME: 'FONT_AWESOME',
  RAW_SVG: 'RAW_SVG'
}

const fontAwesomeIcons = [
  {
    label: 'Link',
    icon: faLink
  },
  {
    label: 'Resume',
    icon: faFileAlt
  },
  // brands
  {
    label: 'Flickr',
    icon: faFlickr
  },
  {
    label: 'LinkedIn',
    icon: faLinkedin
  },
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
  {
    label: 'ArrowRight',
    icon: faArrowAltCircleRight
  },
  {
    label: 'ArrowLeft',
    icon: faArrowAltCircleLeft
  }
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
  {
    label: 'RotateRight',
    icon: RotateRight
  },
  {
    label: 'RotateLeft',
    icon: RotateLeft
  }
].map(icon => ({ ...icon, type: iconTypes.RAW_SVG }))

export const icons = [...fontAwesomeIcons, ...rawSvgIcons].reduce(
  (acc, icon) => ({
    ...acc,
    [icon.label]: icon
  }),
  {}
)
