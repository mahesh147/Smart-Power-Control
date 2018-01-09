import {
  PLUG_INFO_UPDATE,
  TOGGLE_SELECTED_PLUG
} from '../actions/types';

const INITIAL_STATE = {
  status: '0',
  power: '0',
  amount: '0',
};

//This reducer is used for maintaing and managing the states responsible for PLUG

export default (state = INITIAL_STATE, action) => {
console.log('PlugInfoReducer');
  switch (action.type) {


    /*
      If there is any change in the value of PLUG this case is
      executed the new states of PLUG are returned to the app.
    */
    case PLUG_INFO_UPDATE:
    return {
      status: action.payload.status,
      power: action.payload.power,
      amount: action.payload.amount
    };


    default:
      return state;
    }
};
