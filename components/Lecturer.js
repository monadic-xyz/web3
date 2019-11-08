import PropTypes from 'prop-types'

const Lecturer = ({name, company, logoUrl, picUrl}) => (
  <div className="lecturer">
    <div className="imgWrap">
      <img className="avatar" src={picUrl} alt="pic"/>
    </div>
    <div className="meta">
      <p>{name}</p>
      <p><i>{company}</i></p>
    </div>
  </div>
)

export default Lecturer


Lecturer.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.array.isRequired,
  picUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
}
