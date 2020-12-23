import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';

function Criterion({ label, placeholder, setContent, content }) {
  return (
    <FormControl id={label} isRequired>
      <FormLabel fontSize='15px'>{label}</FormLabel>
      <Textarea
        borderRadius='base'
        px={['3', '4']}
        type='text'
        fontSize='15px'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
      />
    </FormControl>
  );
}

export default Criterion;
