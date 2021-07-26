import Meta from '../components/Meta'
import Banking from '../components/Banking'
import Title from '../components/proServiceDetail/Title'
import Services from '../companiesData/fServices'
/* import { server } from '../config/index' */

const bankingServices = () => {
  return (
    <>
      <Title img='/images/Banners/Banking-and-Finance.jpg' />
      <Meta title='Banking Services' />
      <Banking services={Services} />
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

export default bankingServices
