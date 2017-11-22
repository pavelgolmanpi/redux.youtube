import axios from 'axios';

//Most popular list
export const FETCH_MOST_POPULAR = 'FETCH_MOST_POPULAR';
export const FETCH_MOST_POPULAR_SUCCESS = 'FETCH_MOST_POPULAR_SUCCESS';
export const FETCH_MOST_POPULAR_FAILURE = 'FETCH_MOST_POPULAR_FAILURE';
export const RESET_MOST_POPULAR = 'RESET_MOST_POPULAR';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchMostPopular() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/popular`,
    headers: []
  });

  return {
    type: FETCH_MOST_POPULAR,
    payload: request
  };
}

export function fetchMostPopularSuccess(popular) {
  return {
    type: FETCH_MOST_POPULAR_SUCCESS,
    payload: popular
  };
}

export function fetchMostPopularFailure(error) {
  return {
    type: FETCH_MOST_POPULAR_FAILURE,
    payload: error
  };
}
