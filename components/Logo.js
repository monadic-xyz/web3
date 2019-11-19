import PropTypes from 'prop-types'

    const Logo = ({logoUrl}) => (
      <a style={{textDecoration:"none", textAlign:"center"}}><img className="mainLogo" src={logoUrl} alt="SustainWeb3 Logo"/></a>
    )
    
    export default Logo
    
    Logo.propTypes = {
      logoUrl: PropTypes.string.isRequired
    }