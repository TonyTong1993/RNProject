'use strict';
/*弹性动画*/
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text
} from 'react-native';
import Header from '../../components/Header'
class AnimatedView5 extends Component {
   static navigationOptions = ({navigation})=>({
    header:<Header title='弹性动画'/>
  })
  constructor(props) {
    super(props);
  
    this.state = {
        anim: new Animated.Value(0)
    };
  }
  componentDidMount() {
  	 Animated.spring(this.state.anim,{
      toValue:0,//结束后回到初始状态
      velocity:3,//初始速度
      tension:10,//张力系数，默认40
      friction: 1, //摩擦系数,默认7
     }).start()
	}
  render() {
    return (
    	<View style = {styles.demo}>
    		 <Animated.View style ={{
          transform:[{
            scale:this.state.anim.interpolate({
              inputRange:[0,1],
              outputRange:[1,4]
            })
          },
          {translateX: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500],
                })},
          {rotate: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })}]
         }}>
		        <Text style={styles.text}>Transforms!</Text>
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


export default AnimatedView5;