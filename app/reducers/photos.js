/* global Lockr */
import {ADD_CUSTOM_CAT, UPDATE_SEARCH} from '../constants/ActionTypes';
import cats from '../components/cats';

const initialState = {
  defaultCats: [],
  customCats: [],
  search: '',
};

if (Lockr.get('defaultCats') === cats.defaultCats) {
  initialState.defaultCats = Lockr.get('defaultCats');
} else {
  Lockr.flush();
  cats.defaultCats.forEach(ourCat => {
    Lockr.sadd('defaultCats', ourCat);
  });
  initialState.defaultCats = Lockr.get('defaultCats');
}

if (Lockr.get('customCats')) {
  initialState.customCats = Lockr.get('customCats');
} else {
  initialState.customCats = [];
}

export default function photos(state = initialState, action) {
  switch (action.type) {
  case ADD_CUSTOM_CAT:
    return [
      action.cat,
      ...state.customCats,
    ];
  case UPDATE_SEARCH:
    return [
      action.search,
      ...state.search,
    ];

  default:
    return state;
  }
}
