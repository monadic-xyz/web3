import Page from 'layouts/page'
import Table from 'components/Table'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>Header</h1>
        <h3>Subtitle</h3>
        <p>Body</p>
        <br />
        <br />
        <ul className="specs">
          <li>
            <h4>
              &#9889; cool point #1
            </h4>
          </li>
          <li>
            <h4>
              &#9889; cool point #2
            </h4>
          </li>
          <li>
            <h4>
              &#9889; cool point #3
            </h4>
          </li>
        </ul>
        <br />
        <h3>Agenda + Lecture</h3>
        <br />
        <Table />
        <br />
        <p>
          Read lecture descriptions <a href="/resources">here</a>.
        </p>
        <h3>HOWTO</h3>
        <p>HOWTO body</p>
        <br />
        <p>fine print</p>
      </div>
    </Page>
  )
}
