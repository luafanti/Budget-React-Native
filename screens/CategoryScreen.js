import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from "react-native";
import CategoryForm from '../components/CategoryForm'
import { Provider } from "react-redux";
import store from "../config/store";
import FlatListDemo from "../components/FlatListDemo";


class CategoryScreen extends Component {

    render() {
        return (
            <View >
                <Text>Category</Text>
                <Provider store= {store}>
                    <CategoryForm style={styles.container} />

                <FlatListDemo/>
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