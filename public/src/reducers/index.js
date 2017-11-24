import { combineReducers } from 'redux';
import IndexPageReducer from './reducers_index_page';
import VideoPageReducer from './reducers_video_page';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  indexPage: IndexPageReducer,
  videoPage: VideoPageReducer,
  form: formReducer
});

export default rootReducer;
