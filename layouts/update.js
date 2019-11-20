import PropTypes from 'prop-types'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Update = ({children, meta}) => (
  <div className="update">
    <Header />
    <h2>{meta.title}</h2>
    {children}
    <Footer />
  </div>
)

Update.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

export default Update
