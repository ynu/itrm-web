import { USER_FETCHED } from '../actions/auth';

export const user = (state={}, {type, payload }) =>  {
  if (type === USER_FETCHED) {
    return payload;
  }
  return state;
}