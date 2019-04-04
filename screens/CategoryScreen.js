import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import CategoryForm from '../components/CategoryForm'
import { Provider } from "react-redux";
import store from "../config/store";


class CategoryScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Category</Text>
                <Provider store= {store}>
                    <CategoryForm/>
                </Provider>

            </View>
        );
    }
}
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
});