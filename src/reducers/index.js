import {combineReducers} from 'redux';

import picState from './picReducer';

const rootReducer = combineReducers({
  picState
});

export default rootReducer;