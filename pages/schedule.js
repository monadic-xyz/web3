import Link from 'next/link'
import Page from '../layouts/page'
import Table from '../components/Table'
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
          <h3>Agenda to be announced ✨</h3>
        </div>
        <div class="row justify-content-center">
          <Link href="/speakers" >
            <a className="subscribe button1" href="https://gitcoin.typeform.com/to/pkjlfI" target="_blank" rel="noopener noreferrer">
              Apply to speak
            </a>
          </Link>
        </div>
        <p>SustainWeb3 will have a main Speaker featuring keynotes, interactive discussions, and panels with individuals from the Web3 Ecosystem. The Workshop track will give particpants the opportunity to actively discuss, brainstorm, and workshop different topics related to sustaining open source.</p>
        <br />
        <p>Check out some of our <a href="">Speaker</a> talks:</p>
        <Table />
      </div>
      </Page>
    </div>

  )
}
