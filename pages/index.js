import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';
import PostCardList from '../components/homepage/PostCard/PostCardList';

export default function Home() {
  return (
    <LayoutContainer>
      <SEO prefix='Home'></SEO>
      <PostCardList />
    </LayoutContainer>
  );
}
