import { INCREMENT } from '../constants';

export default (count = 0, actions) => {
  const { type } = actions;
  switch (type) {
    case INCREMENT:
      return count + 1;
  }
  return count;
};
