import Head from 'next/head'

const Meta = ({ title, keywords, description /* , html */ }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      {/* {html && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${html}`,
          }}
        ></div>
      )} */}
    </Head>
  )
}

Meta.defaultProps = {
  title: 'New Business Setup in Dubai, UAE - Company Formation with PRO GCC',
  keywords: 'PRO Services',
  description:
    'New Business setup in Dubai, UAE, let us now for the best cost to setup your new company. We provide complete solution with professional company setup services.',
}

export default Meta
