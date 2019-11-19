import Link from 'next/link'
import Head from 'next/head'
import Logo from '../components/Logo'

export default function Header() {
  return (
    <header>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
      </Head>
      <div style={{margin:"auto", width:"100%"}} className="row">
      <div className="col-6">
        <Link href="/">
            <Logo logoUrl="https://i.ibb.co/xgJYgqt/sustain-web3.png"/>
        </Link>
      </div>
      <div className="col-6">
        <nav>
          <div className="links">
            <ul className="navList"> 
              <Link href="#"><a><li>Home</li></a></Link>
              <Link href="../pages/about"><a><li>About</li></a></Link>
              <Link href="https://gitcoin.typeform.com/to/TlO4BH"><a><li>Apply</li></a></Link>
              <Link href="../pages/schedule"><a><li>Schedule</li></a></Link>
              <Link href="../pages/contact"><a><li>Contact Us</li></a></Link>
            </ul>
          </div>
        </nav>
        </div>
      </div>
    </header>
  )
}
