import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Modal from "react-native-modal";
import CategoryForm from "./CategoryForm";
import { connect } from 'react-redux';
import store from "../config/store";
import {showAddCategoryModal} from "../actions/CategoryActions";



class CategoryFormModal extends Component{

    state = {
        visibleModal: false,
        selectedCategory: null
    };

    componentWillReceiveProps(props){
        this.setState({
            visibleModal: props.visibleModal,
            selectedCategory: props.selectedCategory
        })

    }

    renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    renderAddCategoryModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Add Category</Text>
            <CategoryForm style={styles.container} />
            {this.renderButton("Close", () => store.dispatch(showAddCategoryModal(false)))}
        </View>
    );

    renderEditCategoryModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Edit Category</Text>
            <CategoryForm style={styles.container} />
            {this.renderButton("Close", () => store.dispatch(showAddCategoryModal(false)))}
        </View>
    );

    render(){

        if(this.state.selectedCategory === null){
            return(
                <View style={styles.container}>
                    <Modal isVisible={this.state.visibleModal === true}>
                        {this.renderAddCategoryModalContent()}
                    </Modal>

                </View>
            )
        }

        if(this.state.selectedCategory != null){
            return(
                <View style={styles.container}>
                    <Modal isVisible={this.state.visibleModal === true}>
                        {this.renderEditCategoryModalContent()}
                    </Modal>

                </View>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        visibleModal: state.categoryModal.showModal,
        selectedCategory: state.categoryModal.selectedCategory
    }
}

export default connect(mapStateToProps)(CategoryFormModal)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center",
    },
});