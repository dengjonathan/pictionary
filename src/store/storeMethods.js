import store from './store';

export const getState = key => {
  const state = store.getState();
  
  if (key in state) {
    return state[key];
  }
  return state;
};

export const dispatch = action => store.dispatch(action);
