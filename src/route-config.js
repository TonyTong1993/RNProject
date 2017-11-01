import { StackNavigator } from 'react-navigation';
import Home from './pages/Home';
import Detail from './pages/Detail';
import config from './config/config'
const TYRCTModule = require('NativeModules').TYRCTModule
const RootNavigator = StackNavigator({
	Home:{
		screen:Home,
		navigationOptions:({navigation}) => ({
			headerLeft: null
		})
	},
	Detail:{
		screen:Detail
	}
},{
	initialRouteName:'Home',
	headerMode:'screen',
	onTransitionStart:(params)=>{
    console.log(params.index)
    if (config.isIOS) {
       TYRCTModule.rnGetPoprolengNotification({length:params.index})
    }
  },
})

module.exports = RootNavigator;