import * as React from 'react'

import SiteLayout from '../../components/site-layout'
import Navbar from '../../components/navbar'
import Profiles from './components/profiles'

class IndexPage extends React.PureComponent {
  render() {
    return (
      <SiteLayout centered>
        <h1 className="stalemate-font">Andrew Kaiser</h1>
        <Navbar />
        <Profiles />
      </SiteLayout>
    )
  }
}

export default IndexPage
