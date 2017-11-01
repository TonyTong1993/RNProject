import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import config from '../config/config';
const Header = ({title})=>{
	return (
			<View style={{
				width:config.width,
				height:config.isIOS?64:56,
				paddingTop:config.isIOS?20:0,
				backgroundColor:config.themeColor,
				alignItems:'center',
				justifyContent: 'center'}}>
				<Text style={{fontSize:18,color:'#fff'}}>{title}</Text>
			</View>
		)
}
module.exports = Header;