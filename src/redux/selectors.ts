export const getUsername = (store:any) => {
  console.log('selectors', store)
  return store && store.username ? store.username : '';
};
