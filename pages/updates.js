import Link from 'next/link'
import PropTypes from 'prop-types'

import Page from 'layouts/page'

const ReleaseDate = ({date}) => (
  <>
    {date.getDate()} {date.toLocaleDateString('default', {month: 'short'})} {date.getFullYear()}
  </>
)

ReleaseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

const Updates = ({updates}) => (
  <Page>
    <h1>Updates</h1>
    <div className="updates">
      {updates.map(update => (
        <div key={`update-${update.id}`}>
          <ReleaseDate date={new Date(update.meta.releaseDate)} />
          <span> — </span>
          <Link href={`/updates/${update.id}`}>
            <a>{update.meta.title}</a>
          </Link>
        </div>
      ))}
    </div>
  </Page>
)

Updates.propTypes = {
  updates: PropTypes.array.isRequired
}

Updates.defaultProps = {
  updates: []
}

const getFiles = () => {
  const files =
    preval`module.exports = require('fs').readdirSync("./pages/updates")` || []

  return Promise.resolve(files)
}

const getUpdates = async () => {
  const files = await getFiles()
  const updates = files.reduce((collection, file) => {
    collection.push({
      meta: require(`../pages/updates/${file}`).meta,
      id: file.replace(/\.[^/.]+$/, '')
    })

    return collection
  }, [])

  return updates
}

Updates.getInitialProps = async () => {
  return {
    updates: await getUpdates()
  }
}

export default Updates
