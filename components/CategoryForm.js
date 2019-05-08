import { Field, reduxForm } from 'redux-form'

import React , {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {addCategory ,deleteCategory, updateCategory} from '../services/CategoryApiService'
import {fetchCategories} from "../actions/CategoryActions";
import store from "../config/store";
import { connect } from 'react-redux';


const renderInput = ({ input, input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput}/>
}

const addCategoryAction = values => {
    console.log('Adding category', values)
    addCategory(values);

    this.setTimeout(() => {
        store.dispatch(fetchCategories());
    }, 200);

}

const editCategoryAction = values => {
    console.log('Editing category', values)
    updateCategory(values);

    this.setTimeout(() => {
        store.dispatch(fetchCategories());
    }, 200);

}

const deleteCategoryAction = values => {
    console.log('Deleting category', values)
    deleteCategory(values.categoryId);

    this.setTimeout(() => {
        store.dispatch(fetchCategories());
    }, 200);
}



class CategoryForm extends Component{

    componentWillMount () {
        if(this.props.selectedCategory != null){
            this.props.initialize({
                categoryId: this.props.selectedCategory.categoryId ,
                mainCategory: this.props.selectedCategory.mainCategory ,
                subCategory: this.props.selectedCategory.subCategory,
                label: this.props.selectedCategory.label
            });
        }
    }

    render() {
        const { handleSubmit } = this.props
        if(this.props.selectedCategory == null){
            return (
                <View style={styles.container}>
                    <Field name="mainCategory" component={renderInput} />
                    <Field name="subCategory" component={renderInput} />
                    <Field name="label" component={renderInput} />

                    <TouchableOpacity onPress={handleSubmit(addCategoryAction)}>
                        <Text style={styles.button}>Add</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <Field name="mainCategory" component={renderInput} />
                    <Field name="subCategory" component={renderInput} />
                    <Field name="label" component={renderInput} />

                    <TouchableOpacity onPress={handleSubmit(editCategoryAction)}>
                        <Text style={styles.button}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSubmit(deleteCategoryAction)}>
                        <Text style={styles.button}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
};


const mapStateToProps = state => {
    return {
        selectedCategory: state.categoryModal.selectedCategory
    }
}

CategoryForm = connect(
    mapStateToProps
)(CategoryForm);

export default reduxForm({
    form: 'categoryForm'
}) (CategoryForm);


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    },
    container: {

    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 37,
        width: 250
    }
});