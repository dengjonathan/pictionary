import {createStore} from 'redux';

import middlewares from '../middlewares/index';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  middlewares
);

export default store;