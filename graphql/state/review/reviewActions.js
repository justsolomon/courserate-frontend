import { allReviews, sortedBy } from './reviewState';

export const sortReviews = (sortLogic) => {
  let reviews = allReviews();
  if (sortLogic === 'New')
    reviews = reviews
      .slice()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  else if (sortLogic === 'Old')
    reviews = reviews
      .slice()
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  allReviews(reviews);
  sortedBy(sortLogic);
  console.log(sortedBy());
  console.log(allReviews());
};
