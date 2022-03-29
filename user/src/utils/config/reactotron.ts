import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  // @ts-ignore
  const tron = Reactotron.configure({ host: scriptHostname })
    .useReactNative()
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;
}
