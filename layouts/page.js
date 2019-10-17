import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/style.scss'

const Page = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
