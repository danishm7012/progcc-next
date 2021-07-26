import Meta from '../components/Meta'
import Pro from '../components/Pro'
import Title from '../components/proServiceDetail/Title'
import Services from '../companiesData/fServices'
/* import { server } from '../config/index' */
const proServices = () => {
  return (
    <>
      <Title img='/images/Banners/pro.jpg' />
      <Meta title='proServices' />
      <Pro services={Services} />
    </>
  )
}

/* export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/services`)
  const services = await res.json()

  return {
    props: {
      services,
    },
  }
} */

export default proServices
