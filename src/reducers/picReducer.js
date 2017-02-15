import {UPDATE_PIC} from '../actions/actionTypes';

const INITIAL_STATE = {
  current: null
};

const picReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_PIC:
      return {...state, current: action.payload};
  }
  return state;
};

export default picReducer;