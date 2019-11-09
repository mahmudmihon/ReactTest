import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        const { title } = this.props;

        return(
            <View style={{ height: 40, alignItems: "center", justifyContent: "center", borderStyle: "solid" }}>
                <Text style={{ color: 'black', fontSize: 30 }}>{ title }</Text>
            </View>
        );
    }
}