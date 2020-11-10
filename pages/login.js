import LoginContainer from '../components/auth/login/LoginContainer';
import LoginForm from '../components/auth/login/LoginForm';
import Layout from '../components/global/layout/Layout';
import SEO from '../components/global/seo/SEO';

function Login() {
  return (
    <Layout>
      <SEO prefix='Login' />
      <LoginContainer />
    </Layout>
  );
}

export default Login;
