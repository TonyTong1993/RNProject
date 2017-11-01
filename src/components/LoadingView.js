'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text
} from 'react-native';

class LoadingView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	
    };
  }
  componentDidMount() {
  	    
	}
  render() {
    return (
    	<View style = {styles.demo}>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        color:'#333'
    }
});


export default LoadingView;