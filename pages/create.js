import CreateCourseContainer from '../components/create/CreateCourseContainer';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';

function CreatePost() {
  return (
    <LayoutContainer>
      <SEO
        prefix='Create Post'
        description='Add the details of a course alongside your review.'
      />
      <CreateCourseContainer />
    </LayoutContainer>
  );
}

export default CreatePost;
