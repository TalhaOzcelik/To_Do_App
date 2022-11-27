import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from './pages/Welcome';
import MainPage from './pages/MainPage';
import Login from './pages/Login';

const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Login: {
      screen: Login,
    },
    MainPage: {
      screen: MainPage,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(AppSwitchNavigator);
