import Link from 'next/link'


export default function Footer() {
  return (
    <footer>
      <p>
      Tickets on sale now
      </p>
      <br />
      <a className="subscribe button" href="https://gitcoin.typeform.com/to/TlO4BH" target="_blank" rel="noopener noreferrer">
        Apply here
      </a>
      <br />
      <br />
      <br />
      <p>
        For more information, read our <Link href="/faq"><a>FAQ</a></Link> or feel free to <a href="mailto:abbey@monadic.xyz">reach out</a>.
      </p>
    </footer>)
}
