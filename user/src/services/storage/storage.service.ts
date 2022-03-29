import AsyncStorage from '@react-native-community/async-storage';
import Keys from './keys';

export default class Storage {
  static clearWholeStorage(): void {
    AsyncStorage.clear();
  }

  static async getAllStorage(): Promise<any> {
    return AsyncStorage.getAllKeys();
  }

  static async setToken(token: string): Promise<void> {
    AsyncStorage.setItem(Keys.TOKEN, JSON.stringify(token));
  }

  static async getToken(): Promise<string | null> {
    const item = await AsyncStorage.getItem(Keys.TOKEN);
    return item ? JSON.parse(item) : '';
  }

  static async removeToken(): Promise<void> {
    await AsyncStorage.removeItem(Keys.TOKEN);
  }
}
