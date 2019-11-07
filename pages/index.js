import Page from 'layouts/page'
import Table from 'components/Table'
import Lecturer from 'components/Lecturer'
import Sponsor from 'components/Sponsors'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <h1>SustainWeb3</h1>
        <br />
        <br />
        <ul className="specs">
          <li>
          <subtitle>🌱 Boulder, Colorado <br /> ⚡️ February 13th, 2020</subtitle>
          </li>
        </ul>
        <h4>"Our modern society—everything from hospitals to stock markets tonewspapers to social media—runs on software. But take a closer look, and you’ll find that the tools we use to build software are buckling under demand."</h4>
         <h5> - Nadia Eghbal, Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure</h5>
        <br />
        <p>As we start envisioning a "Web3", sustaining free and open source software is more important than ever - and more realistic. We're gathering technologists, economists, maintainers, and hackers who think Web3 is - A New Hope™ for free and open source software. Join us for a one-day unconference to discuss active initiatives, learn from industry luminaries, and start designing the future of Web3 sustainability.
        </p>
        <br />
        <h3>Speakers</h3>
        <div className="lecturer">
          <Lecturer
            name="Eleftherios"
            company="Radicle"
            picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1568990825/VsABh_tY_400x400_hwcjd4.jpg"
          />
            <Lecturer
              name="Kevin Owocki"
              company="Gitcoin"
              picUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_scale,h_125,w_125/v1573135377/0_OrIT7YWnKspLjGyM_fdas48.jpg"
            />
              <Lecturer
                name="Eric Berry"
                company="CodeFund"
                picUrl="https://res.cloudinary.com/dvargvav9/image/upload/v1573135783/jn_XanJK_400x400_gr7kqe.jpg"
              />
              </div>
        <br />
        <p>
        Read full agenda <a href="/agenda">here</a>.
        </p>
        <br />
        <h3>Coordinators</h3>
        <div className="sponsor">
          <Sponsor
            logoUrl="https://res.cloudinary.com/dvargvav9/image/upload/c_fit,h_150,w_150/v1573137862/GitCoinLogo.a9878d389bce_ftsl3h.svg"
          />
          <Sponsor
            logoUrl="https://res.cloudinary.com/juliendonck/image/upload/v1549554598/monadic-icon_myhdjk.svg"
          />
          <Sponsor
            logoUrl="https://demo.identihub.co/assets/Sustain_ICONS_459.svg"
          />
          </div>
      </div>
    </Page>
  )
}
