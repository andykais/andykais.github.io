import {
  faNpm,
  faReddit,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const icons = [
  // solid
  {
    label: 'Link',
    icon: faLink,
  },
  // brands
  {
    label: 'NPM',
    icon: faNpm,
  },
  {
    label: 'Github',
    icon: faGithub,
  },
  {
    label: 'Reddit',
    icon: faReddit,
  },
  {
    label: 'Facebook',
    icon: faFacebook,
  },
  // skills
].reduce(
  (acc, { label, icon }) => ({
    ...acc,
    [label]: { label, icon },
  }),
  {}
)
