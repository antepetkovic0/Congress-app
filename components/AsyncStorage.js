import AsyncStorage from '@react-native-community/async-storage';
import {getUserProfile} from '../components/APICalls';

const isLoggedIn = () => {
  let flag = false;
  getToken().then(token => {
    getUserProfile(token).then(res => {
      if (res.user) {
        flag = true;
      }
    });
  });
  return flag;
};

const storeToken = async accessToken => {
  try {
    await AsyncStorage.setItem('user-token', accessToken);
    //console.log('Token was stored successfull.');
  } catch (err) {
    console.log('Cant save token in AsyncStorage.', err);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('user-token');
    return value;
  } catch (err) {
    console.log('Cant get JWT... ', err);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('user-token');
  } catch (err) {
    // remove error
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.log('Clear async storage error.', err);
  }
};

const printStorage = () => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({[store[i][0]]: store[i][1]});
        return true;
      });
    });
  });
};

export {isLoggedIn, storeToken, getToken, removeToken};
