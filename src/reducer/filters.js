import { CHANGE_DATA_RANGE } from '../constants';

const defaultFilters = {
  dateRange: {
    from: null,
    to: null,
  },
};

export default (filters = defaultFilters, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case CHANGE_DATA_RANGE:
      return { ...filters, dateRange: payLoad.dateRange };
  }
  return filters;
};
