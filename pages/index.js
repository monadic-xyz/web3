import Link from 'next/link'
import Page from '../layouts/page'
import Table from '../components/Table'
import Speaker from '../components/Lecturer'
import Sponsor from '../components/Sponsors'
import {
  LocationIcon,
  CalendarIcon,
  SpeakersIcon,
  SponsorsIcon,
  QuoteIcon
} from '../components/Icons'

export default function Index() {
  return (
    <div className="container">
      <Page>
        <div className="content">
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-12">
              <hr />
              <br />
              <div className="quote">
                <h4>
                  <span
                    style={{ display: 'inline-block', transform: 'scaleX(-1)' }}
                  >
                    <QuoteIcon />
                  </span>
                  &nbsp;Our modern society — everything from hospitals to stock
                  markets to newspapers to social media — runs on software. But
                  take a closer look, and you’ll find that the tools we use to
                  build software are buckling under demand.&nbsp;
                  <QuoteIcon />
                </h4>
                <h5> - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure </h5>
              </div>
              <br />
              <p>As we start envisioning a "Web3", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope™ for free and open source software.<br /><br />Join us for a one-day gathering to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability ✨.</p>
              <p>This event is <em>free to attend</em> with a "pay-what-you-can" donation model. The goal is to stick to traditional FOSS values and fund this event by and for the community. We'll be collecting donations through a <a href="https://gitcoin.co/grants/195/sustain-web3-sustainers" target="_blank" rel="noopener noreferrer">Gitcoin Grant</a>. Because of <a href="https://gitcoin.co/blog/gitcoin-grants-2020/" target="_blank" rel="noopener noreferrer">Quadratic matching</a> on the Gitcoin platform, even small contributions could go a long way.</p>
              <p>→ Can't attend but interested in sponsoring SustainWeb3? Get in touch <a href="https://gitcoin.co/grants/195/sustain-web3-sustainers" target="_blank" rel="noopener noreferrer">here</a>.</p>
              <br />
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <h6 id="sponsors">
            <SpeakersIcon /> Speakers
          </h6>
          <br />
          <br />
          <div className="container">
            <a id="speakers"> </a>
            <div className="row align-items-start">
              <Speaker
                name="Eleftherios Diakomichalis"
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
                name="Simona Pop"
                company="Bounties Network"
                companyUrl="https://www.bounties.network/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1576856033/Simona_2_djqtlu.jpg"
              />
              <Speaker
                name="Nathan Schneider"
                company="CU Boulder"
                companyUrl="https://nathanschneider.info"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/nathanheadshot_eawgvk.jpg"
              />
              <Speaker
                name="Vitalik Buterin"
                company="Ethereum Foundation"
                companyUrl="https://ethereum.org/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1579107738/image-4-250x250_zbtacu.png"
              />
              <Speaker
                name="Josh Cincinnati"
                company="Zcash Foundation"
                companyUrl="https://www.zfnd.org/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1576854839/profile1_k276zl.jpg"
              />
              <Speaker
                name="Jarrell James - Manesh Giday"
                company="Abyssinia"
                companyUrl=""
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1576856652/BC3AB8ED_711C_4B08_94F6_45807DB7D879_t9i1ga.jpg"
              />
              <Speaker
                name="Kevin Owocki"
                company="Gitcoin"
                companyUrl="https://gitcoin.co"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575986003/photo_2019-12-10_14.49.00_axg3ez.jpg"
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

              <Speaker
                name="Griff Green"
                company="Commons Stack"
                companyUrl="http://www.commonsstack.org/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1576854843/Profile_pic_griff_headshot_ycayri.png"
              />
              <Speaker
                name="Liz Daldalian"
                company="Truffle"
                companyUrl="https://www.trufflesuite.com/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1581481697/Liz_Daldalian_Headshot_vp24dn.png"
                />

              <Speaker
                name="Erin Shaben"
                company="Truffle"
                companyUrl="https://www.trufflesuite.com/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1581481715/Erin_Shaben_hnztx7.jpg"
                />

              <Speaker
                name="Hudson Jameson"
                company="Ethereum Foundation"
                companyUrl="https://ethereum.org/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580460859/headshot_large_ompv7x.jpg"
              />
              <Speaker
                name="Karl Floersch"
                company="Optimism"
                companyUrl="https://optimism.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580460879/KarlFloersch_ohitjk.jpg"
              />
              <Speaker
                name="Niran Babalola"
                company="Panvala"
                companyUrl="https://panvala.com/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580460867/twitter_profile_photo_mbftrk.jpg"
              />
              <Speaker
                name="Aidan Hyman"
                company="ChainSafe Systems"
                companyUrl="https://github.com/chainsafesystems"
                picUrl="https://res-console.cloudinary.com/dvargvav9/thumbnails/transform/v1/image/upload//v1580462851/QWlkYW4yX3R4dnE4aw==/drilldown"
              />
              <Speaker
                name="Lane Rettig"
                company="Space Mesh"
                companyUrl="https://spacemesh.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1575978168/laneheadshot_wkgsio.jpg"
              />
              <Speaker
                name="Joe Petrowski"
                company="Parity Technologies"
                companyUrl="https://www.parity.io/"
                picUrl="https://ethcc.io/images/speakers_2020/Joe_Petrowski.png"
              />
              <Speaker
                name="Phil Lucsok"
                company="Parity Technologies"
                companyUrl="https://www.parity.io/"
                picUrl="https://ethcc.io/images/speakers_2020/Phil_Lucsok.jpg"
              />
              <Speaker
                name="Vivek Singh"
                company="Gitcoin"
                companyUrl="https://gitcoin.co"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580461855/download_6_hlvp47.jpg"
              />
              <Speaker
                name="James Waugh"
                company="MetaCartel"
                companyUrl="https://www.metacartel.org/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580461672/IMG_51019__1_2_uyjvzu.jpg"
              />
              <Speaker
                name="James Duncan"
                company="Abridged"
                companyUrl="http://abridged.io/"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1580462789/00010039_usmlol.jpg"
              />
              <Speaker
                name="Danny Zuckerman"
                company="3box"
                companyUrl="https://3box.io/"
                picUrl="https://res-console.cloudinary.com/dvargvav9/thumbnails/transform/v1/image/upload//v1580462959/cHJvZmlsZV9wcXNqeXg=/drilldown"
                />
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row justify-content-center">
              <i style={{ fontSize: '18px' }}>
                Check out the full agenda <a href="schedule">here</a> ✨
              </i>
            </div>
            <br />
            <br />
            <br />
          </div>
          <hr />
          <div className="row justify-content-left">
            <h3 id="sponsors">
              <SponsorsIcon /> Coordinators
            </h3>
          </div>
          <br />
          <div className="row justify-content-around">
            <Sponsor
              sponsorUrl="https://gitcoin.co"
              logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg"
              logoAlt="Gitcoin"
            />
            <Sponsor
              sponsorUrl="https://monadic.xyz/"
              logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg"
              logoAlt=""
            />
            <Sponsor
              sponsorUrl="https://sustainoss.org/"
              logoUrl="https://demo.identihub.co/assets/Sustain_ICONS_459.svg"
              logoAlt=""
            />
          </div>

        </div>
        <div className="justify-content-center">
        <br/>
        <p>In addition to SustainWeb3, Gitcoin will hosting a <a href="https://hackathons.gitcoin.co/sustain-web3/" target="_blank" rel="noopener noreferrer">two week virtual hackathon</a> leading up to the event. Join blockchain companies and open-source contributors from around the world for to help grow the decentralized web, with select winners presented on stage at SustainWeb3.</p>
        </div>
      </Page>
    </div>
  )
}
