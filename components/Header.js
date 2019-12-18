import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import { LocationIcon, CalendarIcon } from '../components/Icons'

export default function Header() {
  return (
    <header>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SustainOSS" />
        <title>Sustain Web3 : 2/13/20 in Boulder :: Checkout our LineUp</title>
        <meta name="twitter:title" content="Sustain Web3 : 2/13/20 in Boulder :: Checkout our LineUp" />
        <meta name="twitter:description" content="we are the architects, builders, designers, researchers building the Open Source web3. we believe that blockchain is a new hope for OSS Sustainability. we are working to build a world" />

        <meta name="twitter:image" content="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.png" />

        <meta property="og:url" content="https://web3.sustainoss.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sustain Web3 : 2/13/20 in Boulder :: Checkout our LineUp" />
        <meta property="og:description" content="we are the architects, builders, designers, researchers building the Open Source web3. we believe that blockchain is a new hope for OSS Sustainability. we are working to build a world" />

        <meta property="og:image" content="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.png" />

        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
      </Head>
      <div style={{ margin: "auto", width: "100%" }} className="row justify-content-center">
        <div className="col-12">
          <Nav />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Logo logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.svg" />
        </div>
      </div>
      <div class="row justify-content-around justify-content-center">
        <div class="col-12 col-sm-5 offset-sm-1 pb-1 pb-sm-0 date">
          <h6> 📍 Boulder, Colorado</h6>
        </div>
        <div class="col-12 col-sm-5 mt-3 mt-sm-0 place">
          <h6> 📆 Feburary 13th, 2020</h6>
          <small>The day before Ethdenver</small>
        </div>
      </div>
    </header>
  )
}
