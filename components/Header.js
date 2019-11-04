import Link from 'next/link'

import Logo from 'components/Logo'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <img src="http://bits.owocki.com/831a5ad92226/Screen%20Shot%202019-11-04%20at%202.26.09%20PM.png"></img>
        </a>
      </Link>
      <nav>
      </nav>
    </header>
  )
}
