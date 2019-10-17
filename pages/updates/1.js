import Update from 'layouts/update'

export const meta = {
  releaseDate: new Date(2019, 9, 20),
  title: 'An example update'
}

export default function Index() {
  return (
    <Update meta={meta}>
      <p>Some inline content.</p>
      <p>More inline content.</p>
    </Update>
  )
}
