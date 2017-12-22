import React, { Component } from 'react'
import {
    TouchableOpacity, StyleSheet, Text, View
} from 'react-native'

class Home extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View>
                <Text> This is Home Page</Text>
            </View>
        )
    }

    static navigationOptions = {
        title: 'Home Tractive Test API',
    };

}



export default Home