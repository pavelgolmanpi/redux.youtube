import { combineReducers } from 'redux';
import IndexPageReducer from './reducers_index_page';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  indexPage: IndexPageReducer,
  form: formReducer
});

export default rootReducer;
