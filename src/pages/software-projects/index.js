import * as React from 'react'

import ContentLayout from '../../components/content-layout'
import Markdown from '../../components/markdown'
import data from '../../data/software-projects'
import styles from './index.module.css'

class Project extends React.PureComponent {
  render() {
    const { title, description, sources } = this.props
    return (
      <>
        <span className={styles.sources}>
          {sources.map(({ icon, link }) => (
            <a href={link} key={link} className={styles.sourceLink}>
              {icon()}
            </a>
          ))}
        </span>
        <div className={styles.words}>
          <h3 className={styles.title}>
            <Markdown>{title}</Markdown>
          </h3>
          <Markdown className={styles.description}>{description}</Markdown>
        </div>
      </>
    )
  }
}

class ProjectsPage extends React.PureComponent {
  render() {
    return (
      <ContentLayout title={'Software Projects'}>
        <ul className={styles.projectList}>
          {data.map(project => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </ContentLayout>
    )
  }
}

export default ProjectsPage
