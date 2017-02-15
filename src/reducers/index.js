import {combineReducers} from 'redux';

import picReducer from './picReducer';

const rootReducer = combineReducers(
  picReducer
);

export default rootReducer;