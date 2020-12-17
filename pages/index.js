import { Stack, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';
import FilterGroupList from '../components/homepage/FilterList/FilterGroupList';
import MobileFilterMenu from '../components/homepage/FilterList/MobileFilterMenu';
import PostCardList from '../components/homepage/PostCard/PostCardList';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobile] = useMediaQuery('(max-width: 750px)');

  useEffect(() => {
    setIsMobile(mobile);
  });
  return (
    <LayoutContainer>
      <SEO prefix='Home' />
      <Stack
        direction={['column', , 'row']}
        pl={['0', , '5%']}
        spacing={['0%', , '15%']}
        align={['flex-end', , 'flex-start']}
      >
        {isMobile ? <MobileFilterMenu /> : <FilterGroupList />}
        <PostCardList />
      </Stack>
    </LayoutContainer>
  );
}
