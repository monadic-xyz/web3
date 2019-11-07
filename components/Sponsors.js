import PropTypes from 'prop-types'

const Sponsor = ({logoUrl}) => (
  <div className="sponsor">
    <div className="imgWrap">
      <img className="logo" src={logoUrl} alt="pic"/>
    </div>
  </div>
)

export default Sponsor


Sponsor.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.array.isRequired,
  picUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string,
}
