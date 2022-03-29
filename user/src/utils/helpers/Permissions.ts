import { PermissionsAndroid } from 'react-native';
import { isIOS } from './iphoneHelper';

export async function request_storage_runtime_permission() {
  try {
    if (!isIOS()) {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'ReactNativeCode Storage Permission',
          message:
            'ReactNativeCode App needs access to your storage to download Photos.',
          buttonPositive: 'Permitir',
          buttonNegative: 'Negar',
          buttonNeutral: 'Mais tarde',
        },
      );
    }
    /*     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Storage Permission Granted.');
    } else {
      Alert.alert('Storage Permission Not Granted');
    } */
  } catch (err) {
    // console.warn(err);
  }
}
