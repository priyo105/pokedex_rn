import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';

import {} from 'react-native/Libraries/NewAppScreen';
import PokeDetails from './src/screens/PokeDetails';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="details"
          options={{headerShown: false}}
          component={PokeDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
