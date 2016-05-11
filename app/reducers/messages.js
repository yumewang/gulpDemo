'use-strict';
import * as types from '../constants/ActionTypes';

console.log('1');
const initialState = {
  loaded: false,
  data: [{
    id: 1,
    username: 'yume',
    type: '1',
    text: 'cshi',
    time: '2016-08-01'
  }],
  fetchHistory: []
};

export function messages(state = initialState, action) {
  console.log('13')
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {...state,
        data: [...state.data, action.message]
      };
    case types.RECEIVE_MESSAGE:
      return {...state,
        data: [...state.data, action.message]
      };
    case types.LOAD_MESSAGES_SUCCESS:
      return state; //TODO
    default:
      return state;
  }
}