export default async function Slugs() {
  const res = await fetch(`https://cms-progcc.herokuapp.com/services`)

  const services = await res.json()

  const slugs = services.map((service) => service.slug)

  return slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })
}
