import {
	FETCH_VIDEO_INFO, FETCH_VIDEO_INFO_SUCCESS, FETCH_VIDEO_INFO_FAILURE, RESET_VIDEO_INFO
} from '../actions/video';

import {
	FETCH_VIDEO_COMMENTS, FETCH_VIDEO_COMMENTS_SUCCESS, FETCH_VIDEO_COMMENTS_FAILURE, RESET_VIDEO_COMMENTS
} from '../actions/video';

const INITIAL_STATE = {
	video: {info:[], error: null, loading: true}
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

	  case FETCH_VIDEO_INFO:
	  	return { ...state, video: {info:[], error: null, loading: true} };
	  case FETCH_VIDEO_INFO_SUCCESS:
	    return { ...state, video: {info: action.payload, error:null, loading: false} };
	  case FETCH_VIDEO_INFO_FAILURE:
	    error = action.payload || {message: action.payload.message};
	    return { ...state, video: {info: [], error: error, loading: false} };
	  case RESET_VIDEO_INFO:
	    return { ...state, video: {info: [], error:null, loading: false} };

			case FETCH_VIDEO_COMMENTS:
				return { ...state, comments: {comments:[], error: null, loading: true} };
			case FETCH_VIDEO_COMMENTS_SUCCESS:
				return { ...state, comments: {comments: action.payload, error:null, loading: false} };
			case FETCH_VIDEO_COMMENTS_FAILURE:
				error = action.payload || {message: action.payload.message};
				return { ...state, comments: {comments: [], error: error, loading: false} };
			case RESET_VIDEO_COMMENTS:
				return { ...state, comments: {comments: [], error:null, loading: false} };

	  default:
	    return state;
  }
}
