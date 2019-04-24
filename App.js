/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import MainBottomNavigation from './components/MainBottomNavigation';

class App extends React.Component {
    render() {
        return (
           <MainBottomNavigation></MainBottomNavigation>
        );
    }
}

const AppQ = createAppContainer(MainBottomNavigation);

export default AppQ;

