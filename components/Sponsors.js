import PropTypes from 'prop-types'
import Link from 'next/link';

const Sponsor = ({sponsorUrl, logoUrl, logoAlt}) => (
  <div className="sponsorItem col-8 col-lg-4 text-center">
    <Link href={sponsorUrl}>
      <a>
        <img className="logo" src={logoUrl} alt={logoAlt}/>
      </a>
    </Link>
  </div>
)

export default Sponsor

Sponsor.propTypes = {
  sponsorUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired
}
