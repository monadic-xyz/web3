import PropTypes from 'prop-types'
import Link from 'next/link';

const Sponsor = ({sponsorUrl, logoUrl, logoAlt}) => (
  <Link href={sponsorUrl}>
    <a>
      <img className="logo" src={logoUrl} alt={logoAlt}/>
    </a>
  </Link>
)

export default Sponsor

Sponsor.propTypes = {
  sponsorUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired
}
