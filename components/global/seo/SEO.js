import { useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

function SEO({
  prefix,
  description = 'Create, edit and share reviews on courses. Check out reviews posted by others and upvote relevant ones.',
}) {
  const themeColor = useColorModeValue('#FFFFFF', '#1A202C');
  const seo = {
    description,
    image: '/assets/images/og-image.jpeg',
    url: 'https://courserate.netlify.app',
    title: `${prefix} | CourseRate`,
    twitterUsername: '@gbsolomon1',
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/images/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/images/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/images/favicon-16x16.png'
      />
      <meta
        name='google-site-verification'
        content='yGdYK6tGmhLsJIcdEyc8NMSz2WpP4tGVjkT1K6woGdk'
      />
      <meta name='theme-color' content={themeColor} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
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
