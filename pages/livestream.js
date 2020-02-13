import Link from 'next/link'
import Blank from '../layouts/blank'

export default function Index() {
  return (
    <div className="container">
    <Blank>
      <div className="content">
        <br />
        <div class="row justify-content-center">
        </div>
      </div>
      </Blank>
      <div class="row justify-content-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qG9yWRCn_NM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/>
      <br/>
      <div class="row justify-content-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7e2m7SgR2Z8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

  )
}
