import {getState, dispatch} from '../store/storeMethods';
import {updatePicAction} from '../actions/picActions';

export const updatePicture = jsonPic => dispatch(updatePicAction(jsonPic));
