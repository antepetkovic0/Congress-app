import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {loginUser} from '../components/APICalls';
import {storeToken, removeToken} from '../components/AsyncStorage';
import {DefaultInput, SecurityInput} from '../components/FormInput/FormInput';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loginInfo, setLoginInfo] = useState('');

  const goLogin = e => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    loginUser(user).then(res => {
      removeToken();
      //res.token / res.status
      if (res.token) {
        storeToken(res.token);
        navigation.navigate('Application');
      } else {
        setLoginInfo(res.status);
      }
    });
  };

  const goToRegister = () => {
    setLoginInfo('');
    navigation.navigate('Register');
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}
        source={require('../pictures/whiteWall.jpeg')}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>7th Croatian Mathematical Congress</Text>
        <ScrollView>
          <View style={styles.loginContainer}>
            <Image
              style={styles.introImage}
              source={require('../pictures/euclidE.png')}
            />
            <Image
              style={{
                position: 'absolute',
                zIndex: -1,
                opacity: 0.9,
                width: '100%',
                height: '100%',
                borderRadius: 20,
              }}
              source={require('../pictures/back.jpg')}
            />
            <DefaultInput
              iconName={'user'}
              iconSize={25}
              placeholder={'Username'}
              state={username}
              updateState={setUsername}
            />
            <SecurityInput
              iconName={'lock'}
              iconSize={25}
              placeholder={'Password'}
              state={password}
              updateState={setPassword}
              securityIconSize={25}
              securityState={showPassword}
              updateSecurityState={setShowPassword}
            />

            <Text style={styles.infoText}>{loginInfo}</Text>
            <TouchableOpacity style={styles.loginButton} onPress={goLogin}>
              <Text style={styles.buttonsText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={goToRegister}>
            <Text style={styles.buttonsText}>CREATE NEW ACCOUNT</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>17 - 20 June 2020</Text>
          <Text style={styles.dateText}>Split, Croatia</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
  },
  titleText: {
    marginTop: 10,
    fontWeight: '400',
    fontSize: 26,
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 80,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'rgb(71, 138, 221)',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
  },
  introImage: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    transform: [{translateY: -60}],
  },
  infoText: {
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 18,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: 'rgb(139, 178, 227)',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  registerButton: {
    marginTop: 30,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb(139, 178, 227)',
    borderWidth: 1,
    borderTopColor: 'black',
    borderBottomColor: 'black',
  },
  buttonsText: {
    fontSize: 20,
    fontWeight: '100',
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 15,
  },
});
