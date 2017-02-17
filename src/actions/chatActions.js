import {ADD_CHAT} from './actionTypes';
import {getState} from '../store/storeMethods';

export const addChatAction = chat => ({
  type: ADD_CHAT,
  payload: chat
});

export const sendPicAction = () => ({
  type: ADD_CHAT,
  payload: getState('picState')
});
