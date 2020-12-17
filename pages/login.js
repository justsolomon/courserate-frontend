import LoginContainer from '../components/auth/login/LoginContainer';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';

function Login() {
  return (
    <LayoutContainer>
      <SEO
        prefix='Login'
        description='Welcome back to CourseRate. Sign in now to create, edit and upvote reviews on courses.'
      />
      <LoginContainer />
    </LayoutContainer>
  );
}

export default Login;
