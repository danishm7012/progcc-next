import { server } from '../config'
import Hero from '../components/Hero'
import About from '../components/About'
import Pro from '../components/Pro'
import Banking from '../components/Banking'
import Team from '../components/team/team'
import Contact from '../components/Contact'

export default function Home({ services }) {
  return (
    <div>
      <Hero />
      <Pro services={services} />
      <About />
      <Banking services={services} />
      <Team />
      <Contact />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/services`)
  const services = await res.json()

  return {
    props: {
      services,
    },
  }
}
