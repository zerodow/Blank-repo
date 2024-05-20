/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox, Platform, UIManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {startNetworkLogging} from 'react-native-network-logger';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs([
  'Warning: ...',
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested inside plain',
]);
if (__DEV__) {
  startNetworkLogging();
}
AppRegistry.registerComponent(appName, () => App);
