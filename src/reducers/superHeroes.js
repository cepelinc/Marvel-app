/**
 * superheroes reducer
 */

import {
  GET_SUPER_HEROES_SUCCESS,
  GET_SINGLE_HERO_SUCCESS,
} from '@constants/actionTypes/superHeroes';

const initialState = {
  superHeroes: []
};

const superHeroes = (state = initialState, action) => {
  switch (action.type) {
  case GET_SUPER_HEROES_SUCCESS: return { ...state, superHeroes: action.data }
  case GET_SINGLE_HERO_SUCCESS: return { ...state, hero: action.data }
  default: return state;
  }
};

export default superHeroes;
