import { makeVar } from '@apollo/client';

export const allReviews = makeVar([]);
export const coursePostId = makeVar('');
export const refetchCourse = makeVar({});
export const sortedBy = makeVar('New');
