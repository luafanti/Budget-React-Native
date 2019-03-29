/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen'
import CategoryScreen from './screens/CategoryScreen'
import AddOutgoScreen from './screens/AddOutgoScreen';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

class App extends React.Component {
    render() {
        return (
           <AppStackNavigator></AppStackNavigator>
        );
    }
}


const AppStackNavigator =  createStackNavigator({
    Main:{
        screen:MainScreen
    },
    Category:{
        screen:CategoryScreen
    },
    Outgo:{
        screen:AddOutgoScreen
    }
});

const AppQ = createAppContainer(AppStackNavigator);

export default AppQ;

