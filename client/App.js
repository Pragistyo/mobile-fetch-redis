import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator,TabNavigator } from 'react-navigation'

import store from './store'
// component
import Home from './screen/home'
import Fetch from './screen/fetch'


const BasicApp = TabNavigator({
  Home: { screen: Home },
  Fetch: { screen: Fetch },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        {/* <Home></Home> */}
          <BasicApp></BasicApp>
      </Provider>
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
