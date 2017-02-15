import {applyMiddlewares} from 'redux';

import sendPicToServer from './sendPictureToServer';

const middlewares = applyMiddlewares(
  sendPicToServer
);

export default middlewares;