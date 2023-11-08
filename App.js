import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackTabs from './src/components/navigations/StackTabs';
import BottomTab from './src/components/navigations/BottomTabs';
const App = () => {
  return (
    <NavigationContainer>
      <StackTabs />
      {/* <BottomTab/> */}
    </NavigationContainer>
  );
};

export default App;
