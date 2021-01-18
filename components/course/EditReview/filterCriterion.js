const filterCriterion = (criterion) => {
  if (typeof criterion === 'string') {
    return criterion.split(/\n/).filter((word) => word.trim() !== '');
  } else return [];
};

export default filterCriterion;
