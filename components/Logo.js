import PropTypes from 'prop-types'
import Link from 'next/link'

    const Logo = ({logoUrl}) => (
      <Link href="/">
        <a style={{textDecoration:"none", textAlign:"center"}}><img className="mainLogo" src={logoUrl} alt="SustainWeb3 Logo"/></a>
      </Link>
    )
    
    export default Logo
    
    Logo.propTypes = {
      logoUrl: PropTypes.string.isRequired
    }