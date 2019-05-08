import { Field, reduxForm } from 'redux-form'

import React , {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {addCategory , getCategory} from '../services/CategoryApiService'
import {fetchCategories} from "../actions/CategoryActions";
import store from "../config/store";


const renderInput = ({ input, input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput}/>
}

const submit = values => {
    console.log('Submitting form', values)
    addCategory(values);

    this.setTimeout(() => {
        store.dispatch(fetchCategories());
    }, 200);

}

class CategoryForm extends Component{

    render() {
        const { handleSubmit } = this.props
        return (
            <View style={styles.container}>
                <Text>Email:</Text>
                <Field name="mainCategory" component={renderInput} />
                <Field name="subCategory" component={renderInput} />
                <Field name="label" component={renderInput} />

                <TouchableOpacity onPress={handleSubmit(submit)}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default reduxForm({
    form: 'categoryForm'
})(CategoryForm);


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