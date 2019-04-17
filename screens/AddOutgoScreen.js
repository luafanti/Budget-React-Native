import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import { Provider } from 'react-redux'
import UserComponent from "../components/UserComponent";
import store from "../config/store";


class AddOutgoScreen extends Component {

    render() {
        return (
            <Provider store={store}>
                <UserComponent />
            </Provider>
        )
    }
}
export default AddOutgoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});