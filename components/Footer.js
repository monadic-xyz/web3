import Link from 'next/link'


export default function Footer() {
  return (
    <footer>
      <br />
      <br/>
      <br/>
      <a className="subscribe button" href="https://gitcoin.typeform.com/to/TlO4BH" target="_blank" rel="noopener noreferrer">
        Apply Now!
      </a>
      <br />
      <br />
      <br />
      <i style={{fontSize:"14px"}}>
        For more information, read our <Link href="/faq"><a>FAQ</a></Link> or feel free to <a href="mailto:abbey@monadic.xyz">reach out</a>.
      </i>
    </footer>)
}
