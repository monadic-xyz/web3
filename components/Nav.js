import Link from 'next/link'

    const Nav = () => (
        <nav>
            <div className="links">
                <ul className="navList"> 
                    <Link className="dropdown-item" href="/#top"><a><li>Home</li></a></Link>
                    <Link className="dropdown-item" href="../pages/about"><a ><li>About</li></a></Link>
                    <Link className="dropdown-item" href="https://gitcoin.typeform.com/to/TlO4BH"><a><li>Apply</li></a></Link>
                    <Link className="dropdown-item" href="../pages/schedule"><a><li>Schedule</li></a></Link>
                    <Link className="dropdown-item" href="#sponsors"><a><li>Sponsors</li></a></Link>
                    <Link className="dropdown-item" href="../pages/contact"><a><li>Contact Us</li></a></Link>
                </ul>
            </div>
        </nav>
    )
    
    export default Nav
