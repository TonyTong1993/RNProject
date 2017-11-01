import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';
import config from '../config/config';
const Header = ({title,leftBarButton,rightBarButton})=>{
	const fontSize = {fontSize:16};
	return (
			<View style={{
				width:config.width,
				height:config.isIOS?64:56,
				paddingTop:config.isIOS?20:0,
				backgroundColor:config.themeColor,
				flexDirection:'row',
				alignItems:'center',
				paddingLeft:10,
				paddingRight:10,
				justifyContent: 'space-between'}}>
				{
					leftBarButton ?
					<TouchableOpacity 
						activeOpacity = {0.85}
					    onPress={leftBarButton.onPress}>
						<Text style={[{color:'#fff'},fontSize]}>
						 {leftBarButton.title}
						</Text>
					</TouchableOpacity>
					  : 
					 rightBarButton ? 	 
				    <Text style={[{opacity:0},fontSize]}>{rightBarButton.title}</Text>
				    :
				    <Text />
				}
				{
					title ? (<Text style={{fontSize:18,color:'#fff'}}>{title}</Text>) : null
				}
				{
					rightBarButton ?
				    <TouchableOpacity 
						activeOpacity = {0.85}
					    onPress={rightBarButton.onPress}>
						<Text style={[{color:'#fff'},fontSize]}>
						 {rightBarButton.title}
						</Text>
						</TouchableOpacity>
						 : 
					 leftBarButton ? 	 
				    <Text style={[{opacity:0},fontSize]}>{leftBarButton.title}</Text>
				    :
				     <Text />
				}
				
			</View>
		)
}
module.exports = Header;