import PropTypes from 'prop-types'

const Lecturer = ({name, bio, logoUrl, picUrl}) => (
  <div className="lecturer">
    <div className="imgWrap">
      <img className="avatar" src={picUrl} alt="pic"/>
    </div>
    <div className="meta">
      <h4>{name}</h4>
      <p>{bio}</p>
      {logoUrl !== '' &&
        <img className="lecture-logo" src={logoUrl} alt="pic"/>
      }
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
