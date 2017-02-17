import {ADD_CHAT} from '../actions/actionTypes';

const INITIAL_STATE = {
  chats: []
};

const chatReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload]
      };
  }
  return state;
};

export default chatReducer;
