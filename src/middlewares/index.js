import {applyMiddleware} from 'redux';

import sendPicToServer from './sendPictureToServer';

const middlewares = applyMiddleware(
  sendPicToServer
);

export default middlewares;