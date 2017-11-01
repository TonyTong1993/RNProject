'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import Header from '../components/Header'
import config from '../config/config'
const json = require('../test/data.json');
const { result } = json;
class Home extends Component {
static navigationOptions = ({ navigation }) => ({
	header:<Header title='首页'/>
  });
constructor(props) {
  super(props);

  this.state = {
  	 data:[],
  	refreshing:false,
  	isDisable:false,//是否被禁用
  };
}
  render() {
    return (
     <View style = {styles.container}>
     	<FlatList 
     		data={this.state.data}
     		renderItem={this._renderItem}
     		keyExtractor={this._keyExtractor}
     		//设置刷新
     		refreshing={this.state.refreshing}
     		onRefresh={this._loadNewData}
     	/>
     </View>
    );
  }
  componentDidMount() {
  	this._generateDataSource()
  }
  componentWillUnmount() {
    clearTimeout(this._timer)
  }
 _generateDataSource = ()=>{
 	this.setState({
 		data:result
 	});
 }
  _keyExtractor = (item,index)=>{
  	return item.movieid
  }
  _renderItem = ({item,index})=>{
  	return (
  		<TouchableOpacity 
         disabled={this.state.isDisable}
         activeOpacity={0.85}
  		 onPress={this._onPressItem}>
  			<View style={{
  				height:100,
  				width:config.width,
  				padding:10,
  				borderBottomWidth:1/config.pixelRatio,
  				borderColor:'#ebebeb',
  				backgroundColor:'#fff',
  				flexDirection:'row'
  			}}>
  				<Image source={{uri:item.poster}} 
  				       style={{width: 53, height: 80}}/>
  				<View style={{flexDirection:'column',marginLeft:10,justifyContent: 'space-between',}}>
  					<Text style={{color:config.defaultTextColor}}>{`影片名：${item.title}`}</Text>
  					<Text style={{color:config.defaultTextColor}}>{`语言：${item.language}`}</Text>
  					<Text style={{color:config.defaultTextColor}}>{`国家：${item.country}`}</Text>
  					<Text style={{color:config.defaultTextColor}}>{`导演：${(item.writers.length>0)?item.writers:"未知"}`}</Text>
  				</View>       
  			</View>
  		</TouchableOpacity>
  		);
  }
  _loadNewData = ()=>{
  	this.setState({
  			refreshing:true 
  		});
  this._timer = setTimeout(()=>{
  		this.setState({
  			refreshing:false 
  		});

  	},3000)
  }
 _onPressItem = ()=> {
	const {navigate} = this.props.navigation;
    navigate('Detail')
         
}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	}
});


export default Home;