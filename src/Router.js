import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ControlPanel from './components/ControlPanel';
import DeviceList from './components/DeviceList';

const RouterComponent = () => {
  console.log('Now inside Router');
  /* This is were all the routes of the app are defined and setup.
     There is only two routes in the app. The main Control Panel and the Device List
     route.
   */
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="controlPanel" component={ControlPanel} initial />
        <Scene key="deviceList" component={DeviceList} />
      </Scene>
    </Router>
  );

};

export default RouterComponent;
