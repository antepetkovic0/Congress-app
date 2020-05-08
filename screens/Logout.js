import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Image, StyleSheet} from 'react-native';
import {defineOrientation} from '../components/DefineOrientation';
import {UserContainer} from '../components/UserContainer/UserContainer';
import {Button} from '../components/Button/Button';
import {getToken, removeToken} from '../components/AsyncStorage';
import {getUserProfile} from '../components/APICalls';

const Logout = ({navigation}) => {
  const [user, setUser] = useState({});
  const orientation = defineOrientation();
  useEffect(() => {
    getToken().then(token => {
      //console.log(token);
      getUserProfile(token).then(res => {
        setUser(res.user);
      });
    });
  }, []);

  const notificationsText = 'See your notifications list.';
  const timelineText =
    'Check out your upcoming lectures.\nClick on lecture to remove them from the list.';
  const locationText =
    'The Congress is being held at the address Rudjer Boskovic 33, 21000 Split, Croatia from 17 to 20 June.';

  const seeTimeline = () => {
    getToken().then(token => {
      getUserProfile(token).then(res => {
        if (res.status) {
          navigation.navigate('Login');
        }
        if (res.user) {
          navigation.navigate('MyTimeline');
        }
      });
    });
  };
  const seeNotifications = () => {
    navigation.navigate('Notifications');
  };
  const seeLocation = () => {
    navigation.navigate('Location');
  };
  const logout = () => {
    removeToken();
    Alert.alert('Logout', 'Do you really want to logout?', [
      {
        text: 'YES',
        onPress: () => {
          navigation.navigate('Login');
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.container,
          orientation.isLandscape ? styles.forLandscape : styles.forPortrait,
        ]}>
        <UserContainer
          title={'Notifications'}
          text={notificationsText}
          iconName={'notification'}
          showMore={seeNotifications}
        />
        <UserContainer
          title={'My timeline'}
          text={timelineText}
          iconName={'timeline'}
          showMore={seeTimeline}
        />
        <UserContainer
          title={'Location'}
          text={locationText}
          iconName={'location'}
          showMore={seeLocation}
        />
      </View>
      <Button style={styles.btnLogout} onPress={logout} text={'Logout'} />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 4,
  },
  forLandscape: {
    flexDirection: 'row',
  },
  forPortrait: {
    flexDirection: 'column',
  },
  btnLogout: {
    flex: 1,
  },
});
