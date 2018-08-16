export default store => next => action => {
  if (!action.generateId) return next(action);
  next({
    ...action,
    payLoad: {
      ...action.payLoad,
      id: Math.floor(Math.random()*(9999999999 - 1) + 1).toString(),
    },
  });
  console.log(store.getState());
};
