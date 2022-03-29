import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['VirtualizedLists should never']);

AppRegistry.registerComponent(appName, () => App);
