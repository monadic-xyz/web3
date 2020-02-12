import PropTypes from 'prop-types'
import Blank_Header from '../components/Blank_Header'
import '../styles/style.scss'

const Blank = ({ children }) => (
  <>
    <Blank_Header/>
    {children}
  </>
)

Blank.propTypes = {
  children: PropTypes.node.isRequired
}

export default Blank
