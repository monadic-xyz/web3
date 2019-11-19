import Link from 'next/link'
import Page from '../layouts/page'
import Table from '../components/Table'
import Lecturer from '../components/Lecturer'
import Sponsor from '../components/Sponsors'
import {LocationIcon, CalendarIcon, SpeakersIcon, QuoteIcon} from '../components/Icons'

export default function Index() {
  return (
    <div className="container">
    <Page>
      <div className="content">
      <br/><br/>
        <div className="row justify-content-center">
          <div className="col-9">
              <ul className="specs">
                <li>
                <subtitle><LocationIcon/> Boulder, Colorado <br /><br /><CalendarIcon/> February 13th, 2020</subtitle>
                </li>
              </ul>
          </div>
          <div class="col-3 text-right">
          <Link href="/lecturers" >
          <a className="subscribe button" href="https://gitcoin.typeform.com/to/TlO4BH" target="_blank" rel="noopener noreferrer">
            Apply
          </a>
          </Link>
        </div>
          <div className="col-12 col-xl-8">
          <hr/>
            <h4><span style={{display:"inline-block", transform:"scaleX(-1)"}}><QuoteIcon/></span>&nbsp;Our modern society—everything from hospitals to stock markets to newspapers to social media—runs on software. But take a closer look, and you’ll find that the tools we use to build software are buckling under demand.&nbsp;<QuoteIcon/></h4>
            <h5> - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure</h5>
            <br />
            <p>As we start envisioning a "Web3", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope™ for free and open source software. Join us for a one-day unconference to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability.
            </p>
            <br/>
            <hr/>
          </div>

          <div className="col-12 col-xl-4">
            <h3><SpeakersIcon/> Speakers</h3>
            <div className="lecturer">
            <div class="col-12 col-md-4 col-xl-12">
              <Lecturer
                name="Eleftherios"
                company="Radicle"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg"
              />
              </div>
              <div class="col-12 col-md-4 col-xl-12">
              <Lecturer
                name="Kevin Owocki"
                company="Gitcoin"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_scale,h_125,w_125/v1573135377/0_OrIT7YWnKspLjGyM_fdas48.jpg"
              />
              </div>
              <div class="col-12 col-md-4 col-xl-12">
              <Lecturer
                name="Eric Berry"
                company="CodeFund"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1573135783/jn_XanJK_400x400_gr7kqe.jpg"
              />
              </div>
            </div>
            <br />
            <p>
              Read full agenda <a href="/agenda">here</a>.
            </p>
            <br />
          </div>
      </div>
      <h3>Coordinators</h3>
      <div className="row justify-content-center">
          <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
              logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg"
            />
            </div>
            <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
              logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg"
            />
            </div>
            <div className="sponsorItem col-8 col-lg-4 text-center">
            <Sponsor
              logoUrl="https://demo.identihub.co/assets/Sustain_ICONS_459.svg"
            />
            </div>
      </div>
    </div>
    </Page>
    </div>
  )
}
