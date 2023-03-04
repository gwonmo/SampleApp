import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavigationTab from './NavigationTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="NavigationTab">
      <Stack.Screen
        name="NavigationTab"
        component={NavigationTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;