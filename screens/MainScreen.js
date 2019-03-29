import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class CategoryScreen extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Go To Category"
                        onPress={() => this.props.navigation.navigate('Category')} />
                <Button title="Go To Outgo"
                        onPress={() => this.props.navigation.navigate('Outgo')} />
            </View>
        );
    }
}
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});