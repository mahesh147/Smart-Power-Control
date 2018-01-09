import {
  LED_INFO_UPDATE,
  TOGGLE_SELECTED_LED
} from '../actions/types';

const INITIAL_STATE = {
  status: '0',
  power: '0',
  amount: '0'
};


//This reducer is used for maintaing and managing the states responsible for LED

export default (state = INITIAL_STATE, action) => {
 console.log('Now in LedInfoReducer');
  switch (action.type) {

    /*
      If there is any change in the value of LED this case is
      executed the new states of LED are returned to the app.
    */

    case LED_INFO_UPDATE:
    return {
      status: action.payload.status,
      power: action.payload.power,
      amount: action.payload.amount
    };

    default:
      return state;
    }
};
