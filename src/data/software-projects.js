import {
  FaLink,
  FaReddit,
  FaFacebook,
  FaNpm,
  FaGithub,
} from 'react-icons/fa/index.mjs'

export default [
  {
    title: 'bitwarden-dmenu',
    description:
      'dmenu cli app for bitwarden which can copy usernames, passwords, and various fields to your clipboard.',
    sources: [
      {
        icon: FaReddit,
        link:
          'https://www.reddit.com/r/Bitwarden/comments/9fc3m9/bitwarden_dmenu/',
      },
      {
        icon: FaNpm,
        link: 'https://www.npmjs.com/package/bitwarden-dmenu',
      },
    ],
  },
  {
    title: 'scrape-pages',
    description:
      'generalized scraping library that uses a single config object for any site that can be statically scraped.',
    sources: [
      {
        icon: FaNpm,
        link: 'https://www.npmjs.com/package/scrape-pages',
      },
    ],
  },
  {
    title: 'Kaiser Engineering',
    description: `set of digital & LED guages running from microcontrollers that respond to a vehicle's OBD-II port. I am not the lead engineer but a prototyper for the digital gauge code written in Python 3 and OpenGL.`,
    sources: [
      {
        icon: FaFacebook,
        link: 'https://www.facebook.com/KaiserEngineering',
      },
      {
        icon: FaLink,
        link: 'https://www.kaiserengineering.io',
      },
    ],
  },
  {
    title: 'telebum',
    description:
      'tv show & movie organizer app. Keep track of shows currently in progress, new episodes, create group watching sessions with facebook friends.',
    sources: [
      {
        icon: FaGithub,
        link: 'https://github.com/andykais/telebum2',
      },
      {
        icon: FaLink,
        link: 'http://telebum.herokuapp.com',
      },
    ],
  },
  {
    title: 'Painting<sub>2</sub>',
    description:
      'client side attempt to render any and all images possible for a given width and height. Essentially view any pixel color combination for a resolution, which has a space of _(width_ &times; _height)_^<sup>3&times;256</sup> images. RPI software design & doc semester project.',
    sources: [
      {
        icon: FaGithub,
        link: 'https://github.com/andykais/painting-base2',
      },
    ],
  },
  {
    title: 'fractal generators',
    description:
      'early tinkerings with fractals and the Processing language yielded some beautiful interactive fractal generators.',
    sources: [
      {
        icon: FaGithub,
        link: 'https://github.com/andykais/InputTriangle',
      },
      {
        icon: FaLink,
        link: 'https://andykais.com/projects',
      },
    ],
  },
]
