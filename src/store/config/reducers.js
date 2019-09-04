import {
    ACTION_CHANGE_PRELOADER
  } from './actions';

const defaultState = {
  preloader: true
}

export const config_Reducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTION_CHANGE_PRELOADER:
      return {
        ...state,
        preloader: action.payload
      };


    default: return state
  }
}
