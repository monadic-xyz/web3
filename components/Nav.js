import Link from 'next/link'
import {LocationIcon, CalendarIcon} from '../components/Icons'

    const Nav = () => (
        <nav>
            <div className="links">
                <ul className="navList">
                    <Link className="dropdown-item" href="/#top"><a><li>Home</li></a></Link>
                    <Link className="dropdown-item" href="/schedule"><a><li>Schedule</li></a></Link>
                    <Link className="dropdown-item" href="#sponsors"><a><li>Sponsors</li></a></Link>
                    <Link className="dropdown-item" href="mailto:abbey@monadic.xyz"><a><li>Contact Us</li></a></Link>
                    <Link className="dropdown-item" href="https://gitcoin.typeform.com/to/TlO4BH"><a><li>Apply</li></a></Link>
                </ul>
                    <br/>
                <ul className="navList_sub">
                     <Link className="dropdown-item" href="../pages/contact"><a><li><LocationIcon/> Boulder, Colorado</li></a></Link>
                     <Link className="dropdown-item" href="../pages/contact"><a><li><CalendarIcon/> Februrary 13th, 2020</li></a></Link>
                </ul>
            </div>
        </nav>
    )

    export default Nav
