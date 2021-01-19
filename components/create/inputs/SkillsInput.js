import {
  FormLabel,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  Box,
  FormControl,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FieldArray } from 'formik';
import ErrorMessage from '../../auth/form/ErrorMessage';

function SkillsInput({ skills }) {
  const borderColor = useColorModeValue(
    'gray.200',
    'rgba(255, 255, 255, 0.16)'
  );

  return (
    <FieldArray name='skills'>
      {({ remove, push, form }) => {
        const error = form.errors.skills && form.touched.skills;
        return (
          <Box w='100%'>
            <FormLabel mb='1' htmlFor='skills' fontSize='15px'>
              Skills{' '}
              <Text as='span' color='gray.500' fontWeight='normal'>
                (separate with spaces)
              </Text>
            </FormLabel>
            <HStack
              pl='2'
              pr='4'
              minH='40px'
              wrap='wrap'
              w='100%'
              border='1px'
              borderRadius='base'
              borderColor={error ? '#E53E3E' : borderColor}
              boxShadow={error && '0 0 0 1px #E53E3E'}
            >
              <HStack wrap='wrap' pt='2' spacing='0'>
                {skills.map((skill, index) => (
                  <Tag
                    mb='2'
                    size='sm'
                    mr='2'
                    borderRadius='full'
                    variant='solid'
                    key={index}
                  >
                    <TagLabel>{skill}</TagLabel>
                    <TagCloseButton onClick={() => remove(index)} />
                  </Tag>
                ))}
              </HStack>
              <Input
                type='text'
                p='0'
                id='skills'
                border='none'
                _focus={{ border: 'none' }}
                w='100px'
                fontSize='15px'
                onKeyDown={(e) => {
                  let value = e.target.value.trim();

                  if (e.keyCode === 32 && value !== '') {
                    if (!skills.includes(value)) {
                      push(value);
                      e.target.value = '';
                    } else {
                      e.target.value = value;
                    }
                  }
                }}
                autoComplete='off'
              />
            </HStack>
            <FormControl isInvalid={error}>
              <ErrorMessage error={form.errors.skills} />
            </FormControl>
          </Box>
        );
      }}
    </FieldArray>
  );
}

export default SkillsInput;
