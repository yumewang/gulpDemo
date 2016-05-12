'use-strict';
import * as types from '../constants/ActionTypes';

const initialState = {
  user: {
    socketID: null,
    username: 'yume',
    id: '1'
  }
};

export function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_SOCKET:
      return {
        ...state,
        user: {...state.user,
          socketID: action.socketID
        }
      };
    default:
      return state;
  }
}
