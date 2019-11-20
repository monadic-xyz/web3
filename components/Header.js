import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Logo from '../components/Logo'

export default function Header() {
  return (
    <header>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
      </Head>
      <div style={{margin:"auto", width:"100%"}} className="row">
        <div className="col-6">
          <Logo logoUrl="https://i.ibb.co/xgJYgqt/sustain-web3.png"/>
        </div>
        <div className="col-6">
          <Nav/>
        </div>
      </div>
    </header>
  )
}
