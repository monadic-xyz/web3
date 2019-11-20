import Link from 'next/link'
import Page from '../layouts/page'
import Table from '../components/Table'
import Lecturer from '../components/Lecturer'
import Sponsor from '../components/Sponsors'
import {LocationIcon, CalendarIcon, SpeakersIcon, SponsorsIcon, QuoteIcon} from '../components/Icons'

export default function Index() {
  return (
    <div className="container">
    <Page>
      <div className="content">
      <br/><br/>
      <div className="row justify-content-center">
        <div className="col-12">
          <ul className="specs">
            <li>
              <subtitle><LocationIcon/> Boulder, Colorado</subtitle>
            </li>
            <li>
              <subtitle><CalendarIcon/> February 13th, 2020</subtitle>
            </li>
            <hr/>
            <li>
              <subtitle><SpeakersIcon/> Speakers</subtitle>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
            <div className="lecturer">
              <Lecturer
                name="Eleftherios"
                company="Radicle"
                companyUrl="https://radicle.xyz/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg"
              />
              <Lecturer
                name="Kevin Owocki"
                company="Gitcoin"
                companyUrl="https://gitcoin.co"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_scale,h_125,w_125/v1573135377/0_OrIT7YWnKspLjGyM_fdas48.jpg"
              />
              <Lecturer
                name="Eric Berry"
                company="CodeFund"
                companyUrl="https://codefund.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1573135783/jn_XanJK_400x400_gr7kqe.jpg"
              />
            </div>
      </div>
      <br/>
      <div className="row justify-content-center">
        <i style={{fontSize:"14px"}}>Read full agenda <a href="/agenda">here</a>.</i>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-12">
        <hr/>
          <h4><span style={{display:"inline-block", transform:"scaleX(-1)"}}><QuoteIcon/></span>&nbsp;Our modern society — everything from hospitals to stock markets to newspapers to social media — runs on software. But take a closer look, and you’ll find that the tools we use to build software are buckling under demand.&nbsp;<QuoteIcon/></h4>
          <h5> - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure</h5>
          <br />
          <p>As we start envisioning a "Web3", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope™ for free and open source software. Join us for a one-day unconference to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability.
          </p>
          <br/>
        </div>
        <div class="col-12 applyBtn">
          <Link href="/lecturers" >
            <a className="subscribe button" href="https://gitcoin.typeform.com/to/TlO4BH" target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </Link>
          <br/>
          <br/>
          <hr/>
        </div>
      </div>
        <h3 id="sponsors"><SponsorsIcon/> Coordinators</h3>
        <br/>
      <div className="row justify-content-center">
        <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
              sponsorUrl = "https://gitcoin.co"
              logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg"
              logoAlt="Gitcoin"
            />
          </div>
          <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
              sponsorUrl = ""
              logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg"
              logoAlt=""
            />
          </div>
          <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
            sponsorUrl = ""
            logoUrl="https://demo.identihub.co/assets/Sustain_ICONS_459.svg"
            logoAlt=""
            />
        </div>
      </div>
    </div>
    </Page>
    </div>
  )
}
