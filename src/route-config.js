import { StackNavigator } from 'react-navigation';
import Home from './pages/Home';
import Detail from './pages/Detail';
import config from './config/config';
import AnimatedView1 from './test/Animated-test/Animated-class-01';
import AnimatedView2 from './test/Animated-test/Animated-class-02';
import AnimatedView3 from './test/Animated-test/Animated-class-03';
import AnimatedView4 from './test/Animated-test/Animated-class-04';
import AnimatedView5 from './test/Animated-test/Animated-class-04';
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
	},
	AnimatedView2:{
		screen:AnimatedView2
	},
	AnimatedView3:{
		screen:AnimatedView3
	},
	AnimatedView4:{
		screen:AnimatedView4
	},
	AnimatedView1:{
		screen:AnimatedView1
	},
	AnimatedView5:{
		screen:AnimatedView5
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