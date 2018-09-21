import * as React from 'react'

import ContentLayout from '../../components/content-layout'
import Timeline from './components/timeline'
import data from '../../data/work'
import styles from './index.module.css'

class WorkPage extends React.Component {
  state = {
    activeEntry: null,
  }

  handleItemHover = title => () => {
    this.setState({ activeEntry: title })
  }

  render() {
    const { activeEntry } = this.state

    return (
      <ContentLayout title="Work Experience">
        <div className={styles.container}>
          <Timeline activeTitle={activeEntry} className={styles.timeline} />
          <div className={styles.work}>
            {data.map(d => (
              <li
                onPointerEnter={this.handleItemHover(d.title)}
                key={d.title}
                className={styles.workItem}
              >
                <div>
                  <a href={d.link}>
                    <h3 className={styles.title}>{d.title}</h3>
                  </a>{' '}
                  | <span>{d.position}</span>
                </div>
                <p>{d.description}</p>
                <div className={styles.stack}>
                  {d.stack.map(({ Icon, label }) => (
                    <span title={label} key={label}>
                      <Icon />
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </div>
        </div>
      </ContentLayout>
    )
  }
}

export default WorkPage
