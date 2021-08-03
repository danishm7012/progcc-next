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
  title: 'PRO Services in UAE - PRO Services Dubai - PRO GCC',
  keywords: 'PRO Services',
  description:
    'PRO Services in UAE where PRO GCC team of expert Consultants handhold you throughout the required PRO Service Dubai from the beginning to the end with legal documentation.',
}

export default Meta
