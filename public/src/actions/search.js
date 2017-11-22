import axios from 'axios';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';
export const RESET_SEARCH = 'RESET_SEARCH';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
export function fetchSearch(values) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/search?q=${values.query}`,
    headers: []
  });

  return {
    type: FETCH_SEARCH,
    payload: request
  };
}

export function fetchSearchSuccess(search) {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: search
  };
}

export function fetchSearchFailure(error) {
  return {
    type: FETCH_SEARCH_FAILURE,
    payload: error
  };
}
