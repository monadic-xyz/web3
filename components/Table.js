import PropTypes from 'prop-types'

const Row = ({name, author, date}) => (
  <ul className="row">
    <li>{name}</li>
    <li><a href="/lecturers">{author}</a></li>
    <li>{date}</li>
  </ul>
)

Row.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const Table = () => (
  <div className="syllabus">
    <Row
      name='1. agenda item'
      author='author name'
      date='4 Nov 2019 – 18:30-20:30'
    />

    <Row
      name='2. agenda item'
      author='author name'
      date='6 Nov 2019 – 18:30-20:30'
    />

    <Row
      name='3. agenda item'
      author='author name'
      date='11 Nov 2019 – 18:30-20:30'
    />

  </div>
)

export default Table
