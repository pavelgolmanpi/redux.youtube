import {
	FETCH_MOST_POPULAR, FETCH_MOST_POPULAR_SUCCESS, FETCH_MOST_POPULAR_FAILURE, RESET_MOST_POPULAR
} from '../actions/popular';


	const INITIAL_STATE = {
    popular: {popular: [], error:null, loading: false}
						};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
  case FETCH_MOST_POPULAR:
  	return { ...state, popular: {popular:[], error: null, loading: true} };
  case FETCH_MOST_POPULAR_SUCCESS:
    return { ...state, popular: {popular: action.payload, error:null, loading: false} };
  case FETCH_MOST_POPULAR_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, popular: {popular: [], error: error, loading: false} };
  case RESET_MOST_POPULAR:
    return { ...state, popular: {popular: [], error:null, loading: false} };
  default:
    return state;
  }
}
