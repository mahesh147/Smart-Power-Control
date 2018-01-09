import firebase from 'firebase';

import {
  BULB_INFO_UPDATE,
  LED_INFO_UPDATE,
  PLUG_INFO_UPDATE

} from './types';

//These function dispatches action to various reducers depending upon their TYPE.

export const bulbInfoFetch = () => {

    //This action is called anytime there is change in any of the value in BULB in firebase.

  return (dispatch) => {
    firebase.database().ref('/bulb')
      .on('value', snapshot => {
        console.log('Got an update for BULB');
        console.log(snapshot.val());
        dispatch({ type: BULB_INFO_UPDATE, payload: snapshot.val() });
      });
  };
};

export const ledInfoFetch = () => {

  //This action is called anytime there is change in any of the value in LED  in firebase.

  return (dispatch) => {
    firebase.database().ref('/led')
      .on('value', snapshot => {
        console.log('Got an update for LED');
        console.log(snapshot.val());
        dispatch({ type: LED_INFO_UPDATE, payload: snapshot.val() });
      });
  };
};

export const plugInfoFetch = () => {
  //This action is called anytime there is change in any of the value in PLUG in firebase.
  return (dispatch) => {
    firebase.database().ref('/plug')
      .on('value', snapshot => {
        console.log('Got an update for PLUG');
        console.log(snapshot.val());
        dispatch({ type: PLUG_INFO_UPDATE, payload: snapshot.val() });
      });

  };
};
