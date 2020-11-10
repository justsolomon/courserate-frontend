import Layout from '../components/global/layout/Layout';
import SEO from '../components/global/seo/SEO';
import SignUpForm from '../components/auth/signup/SignUpForm';
import SignUpContainer from '../components/auth/signup/SignUpContainer';

function Signup() {
  return (
    <Layout>
      <SEO prefix='Sign Up' />
      <SignUpContainer />
    </Layout>
  );
}

export default Signup;
