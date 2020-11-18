import Head from 'next/head';
import Layout from '../components/global/layout/Layout';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';

export default function Home() {
  return (
    <LayoutContainer>
      <SEO prefix='Home'></SEO>
    </LayoutContainer>
  );
}
