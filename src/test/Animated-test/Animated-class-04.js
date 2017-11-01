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

class AnimatedView4 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	fadeInOpacity:new Animated.Value(0),
    	rotation:new Animated.Value(0),
    	fontSize:new Animated.Value(0)
    };
  }
  componentDidMount() {
  	 var timing = Animated.timing;
		Animated.parallel(['fadeInOpacity','rotation','fontSize'].map(property => {
			return timing(this.state[property],{
				toValue: 1,
                duration: 1000,
                easing: Easing.linear
			})
		})).start()
	}
  render() {
    return (
    	<View style = {styles.demo}>
    		 <Animated.View style={{
			       	opacity:this.state.fadeInOpacity,
			       	transform: [{
			       		rotateZ : this.state.rotation.interpolate({
			       			 inputRange: [0,1],
			                 outputRange: ['0deg', '360deg']
			       		})
			       	}]
			       }}>
		       <Animated.Text style={[styles.text,
		       	{fontSize:this.state.fontSize.interpolate({
		                        inputRange: [0,1],
		                        outputRange: [12, 36]
		       })}]}>
		         我骑着七彩祥云出现了
		       </Animated.Text>
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


export default AnimatedView4;