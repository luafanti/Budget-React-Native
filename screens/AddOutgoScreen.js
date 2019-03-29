import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class AddOutgoScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Outgo</Text>
                <Button title="Go to Main Screen"
                        onPress={() => this.props.navigation.navigate('Main')} />
            </View>
        )
    }
}
export default AddOutgoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});