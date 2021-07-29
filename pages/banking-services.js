import Meta from '../components/Meta'
import Banking from '../components/Banking'
import Title from '../components/proServiceDetail/Title'
/* import Services from '../companiesData/fServices'
 import { server } from '../config/index'  */

const bankingServices = ({ bankingServices }) => {
  return (
    <>
      <Title img='/images/Banners/Banking-and-Finance.jpg' />
      <Meta title='Banking Services' />
      <Banking services={bankingServices} />
    </>
  )
}

export const getStaticProps = async () => {
  const res2 = await fetch(
    `https://cms-progcc.herokuapp.com/categories/60f161437806eca740ece88e`
  )
  const category2 = await res2.json()
  const { services: bankingServices } = category2

  return {
    props: {
      bankingServices,
    },
  }
}

export default bankingServices
