import React, { Component } from "react";
import { View, Text, FlatList,TouchableWithoutFeedback} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {fetchCategories} from '../actions/CategoryActions'
import { connect } from "react-redux";
import {addCategory, deleteCategory} from "../services/CategoryApiService";
import store from "../config/store";


class CategoryList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }
    constructor(props) {
        super(props);
    }

    deleteCategory({CategoryId}) {
        console.log('Selected Item :', CategoryId);
        deleteCategory(CategoryId);

        setTimeout(() => {
            store.dispatch(fetchCategories());
        }, 200);
    };

    render() {
        const { error, loading, categories } = this.props;

        if(error){
            return (
                <Text>Connect error</Text>
            );
        }
        return (
                <List>
                    <FlatList
                        data={categories.categories}
                        extraData={categories.categories}
                        renderItem={({ item }) => (

                            <TouchableWithoutFeedback onPress={ () => this.deleteCategory(item)}>
                                <ListItem
                                    title={`${item.MainCategory} ${item.SubCategory}`}
                                    subtitle={item.Username}
                                />
                            </TouchableWithoutFeedback>
                        )}
                        keyExtractor={(item) => item.CategoryId}
                    />
                </List>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error
});

export default connect(mapStateToProps)(CategoryList);