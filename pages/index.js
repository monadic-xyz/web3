import Page from 'layouts/page'
import Table from 'components/Table'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>Sustain Web3</h1>
        <h3>Boulder Colorado - 2/13/2020</h3>
        <p>Want to learn about the latest & greatest Open Source Sustainability initaitives happening in the blockchain space? Join industry luminaries, OSS maintainers, economists, and technologists from across the world for a one-day web3 open source sustainability experience.</p>
        <p>Brought to you by OSCoin & Gitcoin.</p>
        <br />
        <br />
        <ul className="specs">
          <li>
            <h4>
              One Day Only
            </h4>
          </li>
          <li>
            <h4>
              During Denver Blockchain Week; Just before ETHDenver 2020
            </h4>
          </li>
          <li>
            <h4>
              In Boulder Colorado
            </h4>
          </li>
        </ul>
        <br />
        <h3>Agenda + Lecture</h3>
        <br />
        <Table />
        <br />
        <p>
          Read full agenda <a href="/agenda#TODO">here</a>.
        </p>
        <h3>HOWTO</h3>
        <p>Ticket call to action & fine print will go here.</p>
      </div>
    </Page>
  )
}
