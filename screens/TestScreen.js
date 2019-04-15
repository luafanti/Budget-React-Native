import React, {Component} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Provider} from "react-redux";
import store from "../config/store";


class TestScreen extends Component {

    render() {
        return (

            <View style={styles.container}>


                <Provider store= {store}>
                    <Text>USE STORE </Text>
                </Provider>


                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />

                <TestTextComponent testMessage={'Hello '}/>
            </View>
        );
    }
}

class TestTextComponent extends Component{
    constructor(){
        super();
        this.state = {testState: 'Q'};
    }

    changeMessage(message){
        this.setState({message})
    }

    render(){

        const { testState } = this.state

        return(
            <View>
                <Text>{this.props.testMessage}</Text>
                <Text>{this.state.testState}</Text>
            </View>
        )
    }
}

TestTextComponent.defaultProps = {
    testMessage: 'Heading One'
}

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});