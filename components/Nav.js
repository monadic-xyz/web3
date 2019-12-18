import Link from 'next/link'
import {LocationIcon, CalendarIcon} from '../components/Icons'

    const Nav = () => (
        <nav>
          <div className="links">
            <Link href="/#top">
              <a>Home</a>
            </Link>
            <Link href="/schedule">
              <a>Agenda</a>
            </Link>
            <Link href="mailto:abbey@monadic.xyz">
              <a>Contact</a>
            </Link>
            <Link href="https://gitcoin.typeform.com/to/TlO4BH">
              <a>Attend!</a>
            </Link>
          </div>
        </nav>
    )

    export default Nav
