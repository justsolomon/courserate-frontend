import Head from 'next/head';
import Layout from '../components/global/layout/Layout';
import SEO from '../components/global/seo/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO prefix='Home'></SEO>
    </Layout>
  );
}
