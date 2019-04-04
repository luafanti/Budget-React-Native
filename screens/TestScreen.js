import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from "react-native";

class TestScreen extends Component {

    render() {
        return (

            <View style={styles.container}>

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