import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import { useState } from 'react';


const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Welcome">
        <stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
