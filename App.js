import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackTabs from './src/components/navigations/StackTabs';
const App = () => {
  return (
    <NavigationContainer>
      <StackTabs />
    </NavigationContainer>
  );
};

export default App;
