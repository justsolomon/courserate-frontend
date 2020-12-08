import { Box, Text, Tooltip } from '@chakra-ui/react';
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import Locale from './CustomLocale';

timeago.register('myLocale', Locale);

function FormattedTime({ createdAt }) {
  const localTime = new Date(createdAt).toString();
  return (
    <Tooltip
      hasArrow
      label={localTime}
      aria-label={localTime}
      shouldWrapChildren
      placement='top'
      borderRadius='base'
      fontSize='sm'
    >
      <Text
        as={TimeAgo}
        datetime={createdAt}
        locale='myLocale'
        color='gray.500'
      />
    </Tooltip>
  );
}

export default FormattedTime;
