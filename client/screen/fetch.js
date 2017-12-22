import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    TouchableOpacity, StyleSheet, Text, View
} from 'react-native'
import axios from 'axios'

import { fetchData } from '../actions'

class FetchDataClass extends React.Component{
    constructor(props) {
      super (props)  
      this.state = {
          allDataBox : [],
          showData:false
      }
    }

    static navigationOptions = {
        title: 'Fetch Screen',
    };

    fetchPress() {
        this.props.fetchData()
        this.setState({
            showData:!this.state.showData
        })
    }

    showResult () {
        if (this.props.allData.length > 0 && this.state.showData){
            return(
                <View>
                    <Text>Source: {this.props.source}</Text>
                    {this.props.allData.map((item,i) => {
                        return (
                            <View key={i}>
                                <Text>Name : {item.firstname}, {item.lastname}</Text>
                            </View>
                        )
                    })}
                </View>
            )
        } 
    }

    render() {
        return (
            <View>
                <Text>this is fetch screen</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.fetchPress.bind(this)}
                >
                    <Text> Click Fetch Data </Text>
                </TouchableOpacity>
                {this.showResult.call(this)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
})

const mapState = (state) =>{
    return {
        allData : state.allData,
        source: state.source
    }
}

const mapActions = (dispatch) =>{
    return {
        fetchData: (params) => dispatch(fetchData(params))
    }
}

const connectedFetch = connect(
    mapState,
    mapActions
)(FetchDataClass)

export default connectedFetch