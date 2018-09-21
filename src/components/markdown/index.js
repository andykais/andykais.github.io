import * as React from 'react'
import marked from 'marked'

class Markdown extends React.PureComponent {
  render() {
    const { children, className } = this.props

    return (
      <p
        className={className}
        dangerouslySetInnerHTML={{
          __html: marked(children)
            .replace(/^<p>/, '')
            .replace(/<\/p>$/, ''),
        }}
      />
    )
  }
}

export default Markdown
