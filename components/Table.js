import PropTypes from 'prop-types'

const Row = ({time, m_name, m_author, s_name, s_author, title}) => (
  <ul className="row">
    <li>{time}</li>
    <li>{m_name}<br  /><a href="/index#speakers">{m_author}</a></li>
    <li>{s_name}<br  /><a href="/index#speakers">{s_author}</a></li>
    <li>{title}</li>
  </ul>
)

const Header = ({sub1, sub2}) => (
    <ul className="row_header">
      <li></li>
      <li>{sub1}<br  /></li>
      <li>{sub2}<br  /></li>
    </ul>
)

Row.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
}

const Mainstage_Table = () => (
  <div className="agenda">
    <Header
    sub1= 'FIRST STAGE'
    sub2= 'SECOND STAGE'
    />
    <br />
    <div className="background">
    <Row
    time= '9:00'
    m_name='Arrival & Breakfast'
    />
    <Row
    time= '10:00'
    m_name='Welcome'
    />
    </div>
    <Row
      time= '10:10'
      m_name='A New Hope for OSS Sustainability'
      m_author='Kevin Owocki'
    />
    <Row
      time= '10:40'
      m_name='TBD'
      m_author='Duane O`Brien'
      s_name='Sustainably Building the Infrastructure for Web3'
      s_author='Aidan Hyman'
    />
    <Row
      time= '11:10'
      m_name='Open Source Means Everybody So Start Acting Like It'
      m_author='Jarrell James - Manesh Giday'
      s_name='DAOs + UX = Sustainability'
      s_author='James Duncan'
    />
    <Row
      time= '11:40'
      m_name='A Return to Nature: Diversity and Interconnectivity in Natural Ecosystem Sustainability'
      m_author='Simona Pop'
      s_name='All Tech is Political'
      s_author='Lane Rettig'
    />
    <Row
      time= '12:10'
      m_name='Why am I not funded?'
      m_author='Eric Berry'
      s_name='Convincing the World to Cooperate with Incentivized DAOs'
      s_author='Niran Babalola'

    />
    <Row
      time= '12:40'
      m_name='The Language of Sustainability'
      m_author='Phil Lucsok and Joe Petrowski'

    />

    <Row
      time= '13:10'
      m_name='LUNCH'
      s_name='LUNCH'
    />

    <Row
      time= '13:40'
      m_name='Cryptoeconomics and FOSS Sustainability'
      m_author='Eleftherios Diakomichalis'
      s_name='The Path to DAO Sustainability: Funding the Web3 Ecosystem '
      s_author='James Waugh'
    />
    <Row
      time= '14:20'
      m_name='From Scalable to Sustainable Blockchains'
      m_author='Karl Floersch'
      s_name='The Economic Advantages of Web3: Technical Scalability, Social Scalability, and Economic Scalability'
      s_author='Danny Zuckerman'
    />
    <Row
      time= '14:50'
      m_name='SourceCred Cryptoeconomics'
      m_author='Dandelion Mane'
      s_name='Open Source Full Monty - Can you go all the way?'
      s_author='Makoto Inoue'

    />
    <Row
      time= '15:20'
      m_name='Zcash`s Dev Fund Process'
      m_author='Josh Cincinnati'
      s_name='Building Open Source Companies'
      s_author='Vivek Singh'

    />
    <Row
      time= '15:50'
      m_name='Governance in Decentralized, Open Source Projects'
      m_author='Hudson Jameson'
      s_name='Commons Stack: A New Alternative for Funding Open Source'
      s_author='Griff Green'
    />
    <Row
      time= '16:20'
      m_name='Startups need a new option: Exit to Community'
      m_author='Nathan Schneider'
    />
    <Row
      time= '16:50'
      m_name='Closing Keynote'
      m_author='Vitalik Buterin'
    />
    <div className = "background">
    <Row
      time= '17:20'
      m_name='CLOSING -> HAPPY HOUR'
    />
    </div>
</div>
  )

export default Mainstage_Table ;
