export const USER_FETCHED = 'FETCHED_USER';
export const userFetched = (user) => ({
  type: USER_FETCHED,
  payload: user,
});
