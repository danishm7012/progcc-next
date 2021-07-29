import Meta from '../components/Meta'
import Pro from '../components/Pro'
import Title from '../components/proServiceDetail/Title'
/*  import Services from '../companiesData/fServices'
import { server } from '../config/index' */
const proServices = ({ proServices }) => {
  return (
    <>
      <Title img='/images/Banners/pro.jpg' />
      <Meta title='proServices' />
      <Pro services={proServices} />
    </>
  )
}

export const getStaticProps = async () => {
  const res1 = await fetch(
    `https://cms-progcc.herokuapp.com/categories/60f1612b7806eca740ece88d`
  )
  const category1 = await res1.json()
  const { services: proServices } = category1

  return {
    props: {
      proServices,
    },
  }
}

export default proServices
