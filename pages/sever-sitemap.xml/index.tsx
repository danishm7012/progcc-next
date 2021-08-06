import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch('https://cms-progcc.herokuapp.com/services')
  const services: any[] = await response.json()

  const fields: ISitemapField[] = services.map((service) => ({
    loc: `https://progcc.org/${service.slug}`,
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
