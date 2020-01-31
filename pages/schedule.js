import Link from 'next/link'
import Page from '../layouts/page'
import Mainstage_Table from '../components/Table'
import Sidestage_Table from '../components/Table'
import Lecturer from '../components/Lecturer'
import Sponsor from '../components/Sponsors'

export default function Index() {
  return (
    <div className="container">
    <Page>
    <br/><br/><hr/>
      <div className="content">
        <br />
        <div class="row justify-content-center">
          <h3>Schedule ✨</h3>
        </div>
            <Mainstage_Table />
      </div>
      </Page>
    </div>

  )
}
