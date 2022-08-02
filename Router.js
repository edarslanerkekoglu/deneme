import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './src/pages/First';
import Second from './src/pages/Second';
import Third from './src/pages/Third';
import Fourth from './src/pages/Fourth';
import Fifth from './src/pages/Fifth';
import Six from './src/pages/Six';
import GirisYap from './src/pages/GirisYap';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name ="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name ="Fifth" component={Fifth} />
        <Stack.Screen name="Six" component={Six} />
        <Stack.Screen name="GirisYap" component={GirisYap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;