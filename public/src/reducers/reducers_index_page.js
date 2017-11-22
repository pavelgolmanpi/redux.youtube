import {
	FETCH_MOST_POPULAR, FETCH_MOST_POPULAR_SUCCESS, FETCH_MOST_POPULAR_FAILURE, RESET_MOST_POPULAR
} from '../actions/popular';

import {
	FETCH_SEARCH, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE, RESET_SEARCH
} from '../actions/search';

const INITIAL_STATE = {
	popular: {list: [], error:null, loading: false},
	search: {list: [], error:null, loading: false}
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

	  case FETCH_MOST_POPULAR:
	  	return { ...state, popular: {list:[], error: null, loading: true} };
	  case FETCH_MOST_POPULAR_SUCCESS:
	    return { ...state, popular: {list: action.payload, error:null, loading: false} };
	  case FETCH_MOST_POPULAR_FAILURE:
	    error = action.payload || {message: action.payload.message};
	    return { ...state, popular: {list: [], error: error, loading: false} };
	  case RESET_MOST_POPULAR:
	    return { ...state, popular: {list: [], error:null, loading: false} };

		case FETCH_SEARCH:
	  	return { ...state, search: {list:[], error: null, loading: true} };
	  case FETCH_SEARCH_SUCCESS:
	    return { ...state, search: {list: action.payload, error:null, loading: false} };
	  case FETCH_SEARCH_FAILURE:
	    error = action.payload || {message: action.payload.message};
	    return { ...state, search: {list: [], error: error, loading: false} };
	  case RESET_SEARCH:
	    return { ...state, search: {list: [], error:null, loading: false} };

	  default:
	    return state;
  }
}
