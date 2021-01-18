import { FormControl, FormLabel, Textarea, Text } from '@chakra-ui/react';

function Criterion({
  label,
  placeholder,
  setContent,
  content,
  field,
  children,
  create,
  displayError,
}) {
  return (
    <FormControl isRequired={!create} isInvalid={create && displayError}>
      <FormLabel fontSize='15px' htmlFor='label' mb='1'>
        {label}{' '}
        <Text as='span' color='gray.500' fontSize='sm' fontWeight='normal'>
          (separate with new lines)
        </Text>
      </FormLabel>
      <Textarea
        borderRadius='base'
        id={label}
        px={['3', '4']}
        type='text'
        fontSize='15px'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        {...field}
      />
      {children}
    </FormControl>
  );
}

export default Criterion;
