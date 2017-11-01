import {
  Dimensions,
  PixelRatio,
  Platform
} from 'react-native';

const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const isIOS = (Platform.OS === 'ios');
const themeColor = '#0bad61';
const defaultTextColor = '#333';
const barTintColor = '#fff';
const titleColor = '#333';
const fontSize = 16;
module.exports = {
	height,
	width,
	pixelRatio,
	isIOS,
	themeColor,
	defaultTextColor,
	barTintColor,
	titleColor,
	fontSize,
}


