import Link from 'next/link'

import Logo from 'components/Logo'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <nav>
        <div className="links">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/schedule">
            <a>Schedule</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
