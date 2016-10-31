import * as types from '../constants/ActionTypes';

export const addCustomCat = cat => ({type: types.ADD_CUSTOM_CAT, cat});
export const updateSearch = search => ({type: types.UPDATE_SEARCH, search});
