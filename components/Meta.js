import Head from 'next/head'

const Meta = ({
  title,
  keywords,
  description,
  canonical,
  ogImage /* , html */,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={`${title} - ProGcc`} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <link rel='canonical' href={`https://www.progcc.org/${canonical}`} />

      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta name='robots' content='index, follow' />

      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />

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
