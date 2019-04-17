import React, { Component } from "react";
import { View, Text, FlatList} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {fetchCategories} from '../actions/CategoryActions'
import { connect } from "react-redux";


class CategoryList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    constructor(props) {
        super(props);

    }

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
                            <ListItem
                                title={`${item.MainCategory} ${item.SubCategory}`}
                                subtitle={item.Username}
                            />
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