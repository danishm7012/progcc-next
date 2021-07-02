import { server } from '../config'
import Hero from '../components/Hero'
import About from '../components/About'
import Pro from '../components/Pro'
import Banking from '../components/Banking'
import Team from '../components/team/team'
import Contact from '../components/Contact'

export default function Home({ articles }) {
  return (
    <div>
      <Hero />
      <Pro />
      <About />
      <Banking />
      <Team />
      <Contact />
    </div>
  )
}
/* 
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
} */

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
