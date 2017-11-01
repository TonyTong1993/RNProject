'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import config from '../config/config';
import Header from '../components/Header'
import LoadingView from '../components/LoadingView';
class Detail extends Component {
	static navigationOptions = ({navigation})=>({
		header:<Header title='详情'/>
	})
  constructor(props) {
    super(props);
  
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    this._generateDataSource()
  }
  render() {
    return (
     <View style={styles.container}>
      <FlatList 
        data={this.state.data} 
        renderItem={this._renderItem} 
        keyExtractor={this._keyExtractor}/>
     </View>
    );
  }
  _generateDataSource = ()=>{
    var dataSource = ['显隐动画','旋转动画','缩放动画','平移动画','弹性动画'];
    this.setState({
      data:dataSource 
    });
  }
  _keyExtractor = (item,index)=>{
    return `${item}----${index}`
  }
  _renderItem = ({item,index})=>{
    return (
      <TouchableOpacity 
         activeOpacity={0.85}
         onPress={this._onPressItem.bind(this,index)}>
        <View style={{
          width:config.width,
          height:44,
          justifyContent: 'center',alignItems: 'center',
          borderColor:'#ebebeb',
          backgroundColor:'#fff',
          borderBottomWidth:1/config.pixelRatio}}>
          <Text style={{color:config.defaultTextColor,fontSize:16}}>{item}</Text>
        </View>
      </TouchableOpacity>
      )
  }
   _onPressItem = (index)=> {
   const {navigate} = this.props.navigation;
    navigate(`AnimatedView${index+1}`);
         
}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	}
});


export default Detail;