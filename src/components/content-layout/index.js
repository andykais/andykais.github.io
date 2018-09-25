import * as React from 'react'
import { Link } from 'gatsby'

import SiteLayout from '../site-layout'
import Navbar from '../navbar'
import styles from './index.module.css'

class ContentLayout extends React.PureComponent {
  render() {
    const { children, ...parentProps } = this.props
    return (
      <SiteLayout {...parentProps}>
        <div className={styles.header}>
          <h2 className={`stalemate-font ${styles.name}`}>
            <Link to="/">Andrew Kaiser</Link>
          </h2>
          <Navbar />
        </div>
        <div className={styles.childrenContainer}>
          <div className={styles.children}>{children}</div>
        </div>
      </SiteLayout>
    )
  }
}

export default ContentLayout
