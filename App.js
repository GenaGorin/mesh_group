import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import persistStore from 'redux-persist/es/persistStore';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import MainScreen from './src/screens/MainScreen';
import DriverScreen from './src/screens/DriverScreen';
import RaceScreen from './src/screens/RaceScreen';

const Stack = createStackNavigator();

const AppScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="DriverScreen" component={DriverScreen} />
        <Stack.Screen name="RaceScreen" component={RaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppScreens />
      </PersistGate>
    </Provider>
  );
};

export default App;

/*
<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>

*/
