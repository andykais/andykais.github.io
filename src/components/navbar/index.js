import * as React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/work" activeClassName={styles.activeLink}>
          work
        </Link>
        <Link to="/involvement" activeClassName={styles.activeLink}>
          involvement
        </Link>
        <Link to="/software-projects" activeClassName={styles.activeLink}>
          software projects
        </Link>
      </nav>
    )
  }
}

export default Navbar
