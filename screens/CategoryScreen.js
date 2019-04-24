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
            <View >
                <Provider store= {store}>
                    <View>
                        <Button title = 'Add'
                                style = { styles.placeButton }
                                onPress = { this.onClickHandler }
                        />
                        <CategoryFormModal/>
                    </View>

                <CategoryList/>
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