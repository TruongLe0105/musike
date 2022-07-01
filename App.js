import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/features/navigation/AppStack';

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
