'use strict';
/*平移动画*/
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text
} from 'react-native';
import Header from '../../components/Header'
class AnimatedView4 extends Component {
   static navigationOptions = ({navigation})=>({
    header:<Header 
           title='显隐动画' 
           leftBarButton={{
              title:'返回',
              onPress:()=>navigation.goBack()
            }}/>
  })
  constructor(props) {
    super(props);
  
    this.state = {
    	translateX:new Animated.Value(0),
    };
  }
  componentDidMount() {
  	 Animated.timing(this.state.translateX,{
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
			       		translateX : this.state.translateX.interpolate({
			       			 inputRange: [0,1],
			             outputRange: [0, 200]
			       		})
			       	}]
			       }}>
		        <Text style={styles.text}>看我胖了2倍！！！</Text>
	       </Animated.View>
    	</View>
      
    );
  }
}

const styles = StyleSheet.create({
demo: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        color:'#333'
    }
});


export default AnimatedView4;