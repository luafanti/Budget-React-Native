import React from 'react';

import {createBottomTabNavigator} from "react-navigation";
import MainScreen from "../screens/MainScreen";
import CategoryScreen from "../screens/CategoryScreen";
import AddOutgoScreen from "../screens/AddOutgoScreen";
import TestScreen from "../screens/TestScreen";
import {Image, View, StyleSheet, Text} from 'react-native';
import {colors} from '../styles/colors';

const iconHome = require('../assets/images/icons/home.png');
const iconCategory = require('../assets/images/icons/pages.png');
const iconGrids = require('../assets/images/icons/grids.png');




const styles = StyleSheet.create({
    tabBarItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
        paddingHorizontal: 10,
    },
    tabBarIcon: {
        width: 23,
        height: 23,
    },
    tabBarIconFocused: {
        tintColor: '#555CC4',
    },
    headerContainer: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    headerImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
    },
    headerCaption: {
        fontFamily: 'Lato-Regular',
        color: '#ffffff',
        fontSize: 18,
    },
});

export default MainBottomNavigation = createBottomTabNavigator({
        Home: {
            screen: MainScreen,
            navigationOptions: {
                header: (
                    <View style={styles.headerContainer}>
                        <Image style={styles.headerImage} source={iconHome}/>
                        <Text style={styles.headerCaption}>Home</Text>
                    </View>
                ),
            },
        },
        Category: {
            screen: CategoryScreen,
            navigationOptions: {
                header: (
                    <View style={styles.headerContainer}>
                        <Image style={styles.headerImage} source={iconCategory}/>
                        <Text style={styles.headerCaption}>Category</Text>
                    </View>
                ),
            },
        },
        Outgo: {
            screen: AddOutgoScreen,
            navigationOptions: {
                header: (
                    <View style={styles.headerContainer}>
                        <Image style={styles.headerImage} source={iconGrids}/>
                        <Text style={styles.headerCaption}>Outgo</Text>
                    </View>
                ),
            },
        },
        Test: {
            screen: TestScreen,
            navigationOptions: {
                header: (
                    <View style={styles.headerContainer}>
                        <Image style={styles.headerImage} source={iconGrids}/>
                        <Text style={styles.headerCaption}>Test</Text>
                    </View>
                ),
            },
        },
    }, {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                let iconSource;
                switch (routeName) {
                    case 'Home':
                        iconSource = iconHome;
                        break;
                    case 'Category':
                        iconSource = iconCategory;
                        break;
                    case 'Outgo':
                        iconSource = iconGrids;
                        break;
                    case 'Test':
                        iconSource = iconGrids;
                        break;
                }
                return (
                    <View style={styles.tabBarItemContainer}>
                        <Image
                            resizeMode="contain"
                            source={iconSource}
                            style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
                        />
                    </View>
                );
            },
        }),
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: '#ffffff',
                borderTopWidth: 0.5,
                borderTopColor: '#d6d6d6',
            },
            labelStyle: {
                color: '#acacac',
            },
        },
    },
);

