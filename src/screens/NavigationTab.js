import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    View,
    Text,
  } from 'react-native';
import MonthScreen from './MonthScreen';
import WeekScreen from './WeekScreen';
import DayScreen from './DayScreen';

const Tab = createBottomTabNavigator();

function NavigationTab (){

  return (
    
    <Tab.Navigator>
      <Tab.Screen name="month" component={MonthScreen} />
      <Tab.Screen name="week" component={WeekScreen} />
      <Tab.Screen name="day" component={DayScreen} />
    </Tab.Navigator>

  );
};

export default NavigationTab;