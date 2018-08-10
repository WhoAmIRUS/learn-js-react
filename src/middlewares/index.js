export default store => next => action => {
  next(action);
  console.log(store.getState());
};
