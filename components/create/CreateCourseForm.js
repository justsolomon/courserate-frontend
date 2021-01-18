import { Box, Center, VStack } from '@chakra-ui/react';
import ConsInput from './inputs/ConsInput';
import CostInput from './inputs/CostInput';
import CreateButton from './CreateButton';
import LevelInput from './inputs/LevelInput';
import LinkInput from './inputs/LinkInput';
import ProsInput from './inputs/ProsInput';
import SkillsInput from './inputs/SkillsInput';
import TitleInput from './inputs/TitleInput';

function CreateCourseForm({ formik, edit }) {
  return (
    <Center>
      <Box
        as='form'
        onSubmit={formik.handleSubmit}
        p={['4', '0']}
        w={['100%', '85%', '70%', '50%', '45%']}
        px={['4', '8']}
        border={['0', '1px solid #CBD5E0']}
        borderRadius='base'
      >
        <VStack align='flex-end' py={['0', '4']} spacing='4'>
          <TitleInput />
          <LinkInput />
          <LevelInput />
          <CostInput />
          {!edit && (
            <>
              <ProsInput />
              <ConsInput />
            </>
          )}
          <SkillsInput skills={formik.values.skills} />
          <CreateButton
            loading={formik.isSubmitting}
            text={edit ? 'Save changes' : 'Create Course'}
          />
        </VStack>
      </Box>
    </Center>
  );
}

export default CreateCourseForm;
