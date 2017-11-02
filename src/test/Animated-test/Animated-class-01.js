'use strict';
/*显隐动画*/
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text
} from 'react-native';
import Header from '../../components/Header';
class AnimatedView1 extends Component {
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
    	fadeInOpacity:new Animated.Value(0),//设置初始值
    };
  }
  componentDidMount() {
  	  Animated.timing(this.state.fadeInOpacity,{
        toValue:1,//目标值
        duration:2500,//动画时间
        easing:Easing.linear//缓存函数
      }).start();//开始动画
	}
  render() {
    return (
    	<View style = {styles.demo}>
    		 <Animated.View style={{
          opacity:this.state.fadeInOpacity
         }}>
            <Text style={styles.text}>我慢慢的出现了</Text>
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


export default AnimatedView1;