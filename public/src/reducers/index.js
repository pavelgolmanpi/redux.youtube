import { combineReducers } from 'redux';
import MostPopularReducer from './reducer_most_popular';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  mostPopular: MostPopularReducer,
});

export default rootReducer;
