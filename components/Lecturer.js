import PropTypes from 'prop-types'
import Link from 'next/link'

const Speaker = ({name, company, companyUrl, picUrl}) => (
  <div className="col-3 speaker">
    <div className="imgWrap">
      <img className="avatar" src={picUrl} alt="pic"/>
    </div>
    <div className="meta">
      <b>{name}</b><br/>
      <i><Link href={companyUrl}><a>{company}</a></Link></i>
    </div>
  </div>
)

export default Speaker

Speaker.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired
}
