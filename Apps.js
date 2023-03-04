/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screen/RootStack';


const Apps = () => {

  return (

    <NavigationContainer>
      <RootStack />
    </NavigationContainer>

  );
};

export default Apps;