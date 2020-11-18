import Layout from '../components/global/layout/Layout';
import SEO from '../components/global/seo/SEO';
import SignUpForm from '../components/auth/signup/SignUpForm';
import SignUpContainer from '../components/auth/signup/SignUpContainer';
import LayoutContainer from '../components/global/layout/LayoutContainer';

function Signup() {
  return (
    <LayoutContainer>
      <SEO prefix='Sign Up' />
      <SignUpContainer />
    </LayoutContainer>
  );
}

export default Signup;
