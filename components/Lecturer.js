import PropTypes from 'prop-types'
import Link from 'next/link'

const Speaker = ({name, company, companyUrl, picUrl}) => (
  <div className="col-3 pb-3">
    <div>
      <img className="w-100 rounded-circle" style={{backgroundImage: 'url('+picUrl+')', backgroundSize: 'cover', paddingTop: '100%'}} />
    </div>
    <div className="text-center">
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
