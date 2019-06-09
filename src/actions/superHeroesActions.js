import {
  GET_SUPER_HEROES,
  GET_SUPER_HEROES_SUCCESS,
  GET_SUPER_HEROES_FAIL,
  GET_SINGLE_HERO,
  GET_SINGLE_HERO_SUCCESS,
  GET_SINGLE_HERO_FAIL,
} from '@constants/actionTypes/superHeroes';

export const getSuperHeroes = (data) =>({
  type: GET_SUPER_HEROES,
  data
});

export const getSuperHeroesSuccess = (data) => ({
  type: GET_SUPER_HEROES_SUCCESS,
  data
});

export const getSuperHeroesFail = (err) => ({
  type: GET_SUPER_HEROES_FAIL,
  err
});

export const getHero = (id) =>({
  type: GET_SINGLE_HERO,
  id
});

export const getHeroSuccess = (data) => ({
  type: GET_SINGLE_HERO_SUCCESS,
  data
});

export const getHeroFail = (err) => ({
  type: GET_SINGLE_HERO_FAIL,
  err
});
