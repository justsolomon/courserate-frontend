import Layout from '../components/global/layout/Layout';
import SEO from '../components/global/seo/SEO';
import SignUpForm from '../components/auth/signup/SignUpForm';

function Signup() {
  return (
    <Layout>
      <SEO prefix='Sign Up' />
      <SignUpForm />
    </Layout>
  );
}

export default Signup;
