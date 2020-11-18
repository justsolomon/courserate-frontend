import LoginContainer from '../components/auth/login/LoginContainer';
import LoginForm from '../components/auth/login/LoginForm';
import Layout from '../components/global/layout/Layout';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';

function Login() {
  return (
    <LayoutContainer>
      <SEO prefix='Login' />
      <LoginContainer />
    </LayoutContainer>
  );
}

export default Login;
