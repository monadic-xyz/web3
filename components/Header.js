import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import {LocationIcon, CalendarIcon} from '../components/Icons'

export default function Header() {
  return (
    <header>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
      </Head>
      <div style={{margin:"auto", width:"100%"}} className="row justify-content-center">
        <div className="col-12">
          <Nav/>
        </div>
      </div>
      <div style={{margin:"auto", width:"65%", position: "relative", right:"15px"}} className="row">
        <div className="col">
          <Logo logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575999063/SW3_sngkyk.svg"/>
        </div>
      </div>
        <div style={{margin:"auto", width:"100%"}} className="row justify-content-around justify-content-center">
          <div className="subtitle col-5 offset-1">
            <h6> 📍 Boulder, Colorado</h6>
          </div>
          <div className="subtitle col-5">
            <h6> 📆 Feburary 13th, 2020</h6>
          </div>
      </div>
    </header>
  )
}
