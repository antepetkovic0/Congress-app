import React, {useState, useEffect} from 'react';
import {View, Animated, Easing, Image, Dimensions} from 'react-native';
import {isLoggedIn} from '../components/AsyncStorage';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const IntroAnimation = ({navigation}) => {
  const [pmfAnim] = useState(new Animated.Value(0));
  const [hmdAnim] = useState(new Animated.Value(0));
  const [smdAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(pmfAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(hmdAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(smdAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      //TODO IF TOKEN DIDNT EXPIRED GO APP SCREEN
      const logged = isLoggedIn();
      if (logged) {
        navigation.navigate('Application', {screen: 'Home'});
      } else {
        navigation.navigate('Authentication', {screen: 'Login'});
      }
    });
  }, []);
  //if the animation finished running normally, the completion callback will be invoked with {finished: true}

  //passing animation to interpolate function
  const pmfSpin = pmfAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '360deg', '0deg'],
  });
  const hmdSpin = hmdAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const smdSpin = smdAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../pictures/back.jpg')}
        style={{
          position: 'absolute',
          zIndex: -1,
          opacity: 1,
          width: w,
          height: h,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginVertical: 100,
        }}>
        <View style={{alignSelf: 'center'}}>
          <Animated.Image
            style={{
              tintColor: 'rgb(18, 35, 55)',
              transform: [{rotate: pmfSpin}],
            }}
            source={require('../pictures/pmfLogoE.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Animated.Image
              style={{
                tintColor: 'rgb(18, 35, 55)',
                transform: [{rotate: smdSpin}],
              }}
              source={require('../pictures/smdLogoE.png')}
            />
          </View>
          <View>
            <Animated.Image
              style={{
                tintColor: 'rgb(18, 35, 55)',
                transform: [{rotate: hmdSpin}],
              }}
              source={require('../pictures/hmdLogoE.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroAnimation;
