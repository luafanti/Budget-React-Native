import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class CategoryScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Category</Text>

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