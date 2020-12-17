import SEO from '../components/global/seo/SEO';
import SignUpContainer from '../components/auth/signup/SignUpContainer';
import LayoutContainer from '../components/global/layout/LayoutContainer';

function Signup() {
  return (
    <LayoutContainer>
      <SEO
        prefix='Sign Up'
        description='Create your account now on CourseRate to start posting reviews on courses and upvoting reviews posted by others.'
      />
      <SignUpContainer />
    </LayoutContainer>
  );
}

export default Signup;
