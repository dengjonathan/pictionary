import {getState, dispatch} from '../store/storeMethods';
import {updatePicAction} from '../actions/picActions';
import {sendPicAction} from '../actions/chatActions';

export const updatePicture = jsonPic => dispatch(updatePicAction(jsonPic));

export const sendPicture = () => dispatch(sendPicAction());
