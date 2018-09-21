import * as React from 'react'

import profiles from '../../../../data/home'
import styles from './index.module.css'

class Profiles extends React.PureComponent {
  render() {
    return (
      <div>
        <ul className={styles.list}>
          {profiles.map(p => (
            <li key={p.label}>
              <a href={p.link}>
                {p.icon({ className: styles.icon })}
                <span className={styles.label}>{p.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Profiles
