import { HStack } from '@chakra-ui/react';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';
import FilterGroupList from '../components/homepage/FilterList/FilterGroupList';
import PostCardList from '../components/homepage/PostCard/PostCardList';

export default function Home() {
  return (
    <LayoutContainer>
      <SEO prefix='Home'></SEO>
      <HStack pl='5%' spacing='15%' align='flex-start'>
        <FilterGroupList />
        <PostCardList />
      </HStack>
    </LayoutContainer>
  );
}
