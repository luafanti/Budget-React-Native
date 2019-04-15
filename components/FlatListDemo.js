import React, { Component } from "react";
import { View, Text, FlatList} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {getCategory} from '../services/CategoryApiService'


class FlatListDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = async () => {
        const resp = await getCategory();
        this.setState({
            data: resp,
            loading: false,
            refreshing: false
        });
    };

    render() {
        return (
                <List>
                    <FlatList
                        data={this.state.data}
                        extraData={this.state.data}
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

export default FlatListDemo;