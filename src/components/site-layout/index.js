import * as React from 'react'
import Helmet from 'react-helmet'

import styles from './index.module.css'
import './global-styles.css'

const metaData = Object.entries({
  description:
    'Andrew Kaiser is a software engineer interested in web applications, scalablity and operations',
  keywords: 'resume, personal, profile',
}).map(([name, content]) => ({ name, content }))

class SiteLayout extends React.PureComponent {
  render() {
    const { title, children, centered } = this.props

    return (
      <>
        <Helmet
          title={title ? `${title} | Andrew Kaiser` : 'Andrew Kaiser'}
          meta={metaData}
        >
          <html lang="en" />
        </Helmet>
        <div className={styles.container}>
          <div className={centered && styles.centered}>{children}</div>
          <footer className={styles.footer}>
            source code on{' '}
            <a href="https://github.com/andykais/andykais.github.io">github</a>
          </footer>
        </div>
      </>
    )
  }
}

export default SiteLayout
