import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import {Provider} from "react-redux";
import store from "../config/store";
import CategoryList from "../components/CategoryList";
import CategoryFormModal from '../components/CategoryFormModal';
import {showAddCategoryModal} from "../actions/CategoryActions";


class CategoryScreen extends Component {

    onClickHandler = () => {
        store.dispatch(showAddCategoryModal(true));
    }

    render() {
        return (
            <Provider store= {store}>
                <Button title = 'Add'
                        style = { styles.placeButton }
                        onPress = { this.onClickHandler }
                />
                <CategoryList/>
                <CategoryFormModal/>
            </Provider>

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