import { useRouter } from 'next/router';
import LayoutContainer from '../../components/global/layout/LayoutContainer';
import SEO from '../../components/global/seo/SEO';
import UserProfile from '../../components/userProfile/UserProfile';

function Profile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <LayoutContainer>
      <SEO
        prefix={username}
        description={`Check out the latest reviews from ${username}`}
      />
      <UserProfile />
    </LayoutContainer>
  );
}

export default Profile;
