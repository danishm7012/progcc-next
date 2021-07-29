/* import { server } from '../config' */
import Hero from '../components/Hero'
import About from '../components/About'
import Pro from '../components/Pro'
import Banking from '../components/Banking'
import Team from '../components/team/team'
import Contact from '../components/Contact'
import Services from '../companiesData/fServices'

export default function Home({ proServices, bankingServices }) {
  return (
    <div>
      <Hero />
      <Pro services={proServices} />
      <About />
      <Banking services={bankingServices} />
      <Team />
      <Contact />
    </div>
  )
}

export const getStaticProps = async () => {
  const res1 = await fetch(
    `https://cms-progcc.herokuapp.com/categories/60f1612b7806eca740ece88d`
  )
  const category1 = await res1.json()
  const { services: proServices } = category1
  const res2 = await fetch(
    `https://cms-progcc.herokuapp.com/categories/60f161437806eca740ece88e`
  )
  const category2 = await res2.json()
  const { services: bankingServices } = category2
  /* console.log(services) */
  return {
    props: {
      proServices,
      bankingServices,
    },
  }
}
