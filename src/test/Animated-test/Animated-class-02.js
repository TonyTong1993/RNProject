'use strict';
/*旋转动画*/
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text
} from 'react-native';
import Header from '../../components/Header'
class AnimatedView2 extends Component {
   static navigationOptions = ({navigation})=>({
    header:<Header 
            title='旋转动画' 
            leftBarButton={{
              title:'返回',
              onPress:()=>navigation.goBack()
            }}/>
  })
  constructor(props) {
    super(props);
  
    this.state = {
    	rotation:new Animated.Value(0),
    };
  }
  componentDidMount() {
  	   Animated.timing(this.state.rotation,{
        toValue:1,
        duration:2500,
        easing:Easing.linear
       }).start()
	}
  render() {
    return (
    	<View style = {styles.demo}>
    		 <Animated.View style={{
			       	transform: [{
			       		rotateZ : this.state.rotation.interpolate({
			       			 inputRange: [0,1],
			             outputRange: ['0deg', '360deg']
			       		})
			       	}]
			       }}>
		        <Text style={styles.text}>看我360度旋转！！！</Text>
	       </Animated.View>
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


export default AnimatedView2;