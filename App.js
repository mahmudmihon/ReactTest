import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Components/Common/Header';

export default class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  render() {
    let { count } = this.state;

    return(
      <View style={ styles.container }>
        <View>
          <Header title={ "ZAHIR'S APP" } />
        </View>

        <View>
          <Text>Count - { count }</Text>
        </View>

        <View>
          <Button onPress={() => {
            this.setState({
              count: count + 1,
            });
          }}

          title="ADD"
          />

          <Button onPress={() => {
            if(count > 0) {
              this.setState({
                count: count - 1,
              });
            }
          }}

          title="SUBTRACT"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
