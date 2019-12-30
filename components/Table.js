import PropTypes from 'prop-types'

const Row = ({name, author, description}) => (
  <ul className="row">
    <li>{name}<br  /><a href="/lecturers">{author}</a></li>
    <li>{description}</li>
  </ul>
)

Row.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const Table = () => (
  <div className="agenda">
    <Row
      name='"A New Hope for OSS Sustainability"'
      author='Kevin Owocki'
      description='Blockchains are a new hope for OSS sustainability - In this talk, Gitcoin Founder Kevin Owocki will tell us why.'
    />

    <Row
      name='"Startups need a new option: Exit to Community"'
      author='Nathan Schneider'
      description='When a startup company takes early investment, typically the expectation is that everyone is working toward one of two “exit” events: selling the company to a bigger company or selling to retail investors in an initial public offering. This talk explores strategies that could help create a new option for startups: Exit to Community (E2C) - transitioning investor ownership to ownership by the people who rely on it most---in the case of an online platform, its users.'
    />

    <Row
      name='"Traveler`s Tales: The 1st 20 Years Of Open Source"'
      author='Jim Jagielski'
      description='A look back at the history of the 1st 20 years of open source, and a peek at the next 20 by one of the leaders of the open source movement'
    />

    <Row
      name='"Open Source Means Everybody So Start Acting Like It"'
      author='Jarrell James - Manesh Giday'
      description='If open source the right way forward, then why is it primarily utilized, contributed to and maintained by developed nations. Where is open source development for mobile clients? Why is open source development constrained to desktop and laptop computers. Let’s cut the shit, and build with everybody.'
    />

    <Row
      name='"A Return to Nature: Diversity and Interconnectivity in Natural Ecosystem Sustainability"'
      author='Simona Pop'
      description='The sustainability of complex ecosystems in nature depends on diversity and interconnectivity as the two structural pillars responsible for balance. A look at the role of complementary currencies within communities and their impact on thriving.'
    />
  </div>
)

export default Table
