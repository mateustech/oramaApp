// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Views/Splash';
import Home from './Views/Home';
import Ranking from './Views/Ranking';
import Beneficios from './Views/Beneficios';
import Sigin from './Views/Sigin';
import Signup from './Views/Signup';
import Convervador from './Views/PerfilDiscovery/conservador';
import Arrojado from './Views/PerfilDiscovery/arrojado';
import Moderado from './Views/PerfilDiscovery/moderado';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Rank" component={Ranking} /> */}
        <Stack.Screen name="Beneficios" component={Beneficios} />
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Sigin} /> */}
        {/* <Stack.Screen name="PerfilConservador" component={Convervador} /> */}
        {/* <Stack.Screen name="PerfilModerado" component={Moderado} /> */}
        <Stack.Screen name="PerfilArrojado" component={Arrojado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
