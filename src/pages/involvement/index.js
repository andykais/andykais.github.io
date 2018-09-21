import * as React from 'react'

import ContentLayout from '../../components/content-layout'
import Markdown from '../../components/markdown'
import data from '../../data/involvement'
import styles from './index.module.css'

class InvolvementPage extends React.PureComponent {
  render() {
    return (
      <ContentLayout title="Involvement">
        {data.map(d => (
          <div key={d.title}>
            <h3 className={styles.title}>{d.title}</h3>
            {d.position && (
              <>
                {' | '}
                <span>{d.position}</span>
              </>
            )}
            <Markdown className={styles.description}>{d.description}</Markdown>
          </div>
        ))}
      </ContentLayout>
    )
  }
}

export default InvolvementPage
