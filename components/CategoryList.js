import React, {Component} from "react";
import {SectionList, StyleSheet, Text} from "react-native";
import {fetchCategories} from '../actions/CategoryActions'
import {connect} from "react-redux";
import {deleteCategory, transformCategoriesToSections} from "../services/CategoryApiService";
import store from "../config/store";


class CategoryList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    constructor(props) {
        super(props);
    }

    deleteCategory = (categoryId) => {
        console.log('Selected Item :', categoryId);
        deleteCategory(categoryId);

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

        if(loading){
            return (
                <Text>Loading</Text>
            );
        }

        return (

            <SectionList
                sections={transformCategoriesToSections(categories.categories)}
                renderSectionHeader={ ({section}) => <Text style={styles.SectionHeader}> { section.title } </Text> }
                renderItem={ ({item}) => <Text style={styles.SectionListItemS} onPress={this.deleteCategory.bind(this, item.categoryId)}> {item.subCategory} </Text> }
                keyExtractor={ (item) => item.categoryId}
            />

        );
    }


}

const mapStateToProps = state => ({
    categories: state.categories.items,
    loading: state.categories.loading,
    error: state.categories.error
});

export default connect(mapStateToProps)(CategoryList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    },
    SectionHeader:{
        backgroundColor : '#64B5F6',
        fontSize : 20,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    SectionListItemS:{
        fontSize : 16,
        padding: 6,
        color: '#000',
        backgroundColor : '#F5F5F5'
    }
});