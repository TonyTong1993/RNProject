'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import config from '../config/config'
import Header from '../components/Header'
class Detail extends Component {
	static navigationOptions = ({navigation})=>({
		header:<Header title='详情'/>
	})
  render() {
    return (
      <View style={styles.container}>
      	<Text style={{color:config.defaultTextColor}}>欢迎来到电影详情</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default Detail;