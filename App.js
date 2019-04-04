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
import AddOutgoScreen from './screens/AddOutgoScreen'
import TestScreen from './screens/TestScreen'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import store from "./config/store";
import Provider from "react-redux/es/components/Provider";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
           <AppStackNavigator></AppStackNavigator>
            </Provider>
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
    },
    Test:{
        screen:TestScreen
    }
});

const AppQ = createAppContainer(AppStackNavigator);

export default AppQ;

