import Link from 'next/link'
import Page from '../layouts/page'
import Table from '../components/Table'
import Speaker from '../components/Lecturer'
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
        <hr/>
        <br />
          <div className="quote">
           <h4>
            <span style={{display:"inline-block", transform:"scaleX(-1)"}}><QuoteIcon/></span>&nbsp;Our modern society — everything from hospitals to stock markets to newspapers to social media — runs on software. But take a closer look, and you’ll find that the tools we use to build software are buckling under demand.&nbsp;<QuoteIcon/>
           </h4>
           <h5> - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure
           </h5>
          </div>
          <br />
          <p>As we start envisioning a "Web3", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope™ for free and open source software.<br /><br />Join us for a one-day gathering to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability ✨.
          </p>
          <br/>
          </div>
          
        </div>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h6 id="sponsors"><SpeakersIcon/> Speakers</h6>
        <br/>
        <br/>
        <div className="container">
        <div className="row align-items-start">
            <div className="speaker">
              <Speaker
                name="Eleftherios"
                company="Radicle"
                companyUrl="https://radicle.xyz/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg"
              />
              <Speaker
                name="Dandelion Mane"
                company="SourceCred"
                companyUrl="https://sourcecred.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978850/1400023_bvk5yt.jpg"
              />
              <Speaker
                name="Eric Berry"
                company="CodeFund"
                companyUrl="https://codefund.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1573135783/jn_XanJK_400x400_gr7kqe.jpg"
              />
              <Speaker
                name="Abbey Titcomb"
                company="Radicle"
                companyUrl="http://radicle.xyz/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575981117/cropped_fiw5ny.jpg"
              />
            </div>
            <div className="speaker">
              <Speaker
                name="Lane Rettig"
                company="Space Mesh"
                companyUrl="https://spacemesh.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/laneheadshot_wkgsio.jpg"
              />
              <Speaker
                name="Nathan Schneider"
                company="CU Boulder"
                companyUrl="https://nathanschneider.info"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/nathanheadshot_eawgvk.jpg"
              />
              <Speaker
                name="Jim Jagielski"
                company="ConsenSys"
                companyUrl="https://codefund.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978736/jimheadshot_s3nucv.jpg"
              />
              <Speaker
                  name="Kevin Owocki"
                  company="Gitcoin"
                  companyUrl="https://gitcoin.co"
                  picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575986003/photo_2019-12-10_14.49.00_axg3ez.jpg"
                />
            </div>
        </div>
      </div>
      <br/>
      <div className="row justify-content-center">
        <i style={{fontSize:"14px"}}>Read full agenda <a href="">here</a>.</i>
      </div>
      <br />
      <br/>
      <br/>
      <hr/>
      <div className="row justify-content-left">
        <h3 id="sponsors"><SponsorsIcon/> Coordinators</h3>
      </div>
        <br/>
      <div className="row justify-content-center">
            <Sponsor
              sponsorUrl = "https://gitcoin.co"
              logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg"
              logoAlt="Gitcoin"
            />
            <Sponsor
              sponsorUrl = "https://monadic.xyz/"
              logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg"
              logoAlt=""
            />
            <Sponsor
            sponsorUrl = "https://sustainoss.org/"
            logoUrl="https://demo.identihub.co/assets/Sustain_ICONS_459.svg"
            logoAlt=""
            />
      </div>
    </div>
    </Page>
    </div>
  )
}
