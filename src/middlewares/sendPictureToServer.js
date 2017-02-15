import {UPDATE_PIC} from '../actions/actionTypes';

const sendPicToServer = store => next => action => {
  // API request
  if (action.type === UPDATE_PIC) {
    console.log('I am sending the updated picture to the server!!!');
  }
  next(action);
};

export default sendPicToServer;