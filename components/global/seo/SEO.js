import Head from 'next/head';

function SEO({ prefix }) {
  const seo = {
    description: '',
    image: '',
    url: '',
    title: `${prefix} | CourseRate`,
    twitterUsername: '',
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
    </Head>
  );
}

export default SEO;
