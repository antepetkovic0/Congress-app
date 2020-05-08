import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {registerUser} from '../components/APICalls';
import {DefaultInput, SecurityInput} from '../components/FormInput/FormInput';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [registrationInfo, setRegistrationInfo] = useState('');

  const goRegister = e => {
    e.preventDefault();

    if (
      email === '' ||
      username === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setRegistrationInfo('Please fill required fields.');
    } else if (password !== confirmPassword) {
      setRegistrationInfo('Passwords dont match.');
    } else {
      const user = {
        email: email,
        username: username,
        password: password,
      };

      registerUser(user).then(res => {
        if (res.status.split(' ').length > 2) {
          setRegistrationInfo(res.status);
        } else {
          setRegistrationInfo('');
          Alert.alert(
            'Registration info',
            'You have been successfully register. Login to proceed to the application.',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('Login');
                },
              },
            ],
          );
        }
      });
    }
  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../pictures/whiteWall.jpeg')}
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
      />
      <View style={styles.container}>
        <Image
          style={{
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '100%',
            borderRadius: 5,
          }}
          source={require('../pictures/back.jpg')}
        />
        <Text style={styles.titleText}>Register</Text>
        <ScrollView>
          <DefaultInput
            iconName={'user'}
            iconSize={25}
            placeholder={'Username'}
            state={username}
            updateState={setUsername}
          />
          <DefaultInput
            iconName={'envelope'}
            iconSize={21}
            placeholder={'Email'}
            state={email}
            updateState={setEmail}
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
          <SecurityInput
            iconName={'lock'}
            iconSize={25}
            placeholder={'Confirm password'}
            state={confirmPassword}
            updateState={setConfirmPassword}
            securityIconSize={25}
            securityState={showConfirmPassword}
            updateSecurityState={setShowConfirmPassword}
          />
        </ScrollView>
        <TouchableOpacity style={styles.registerButton} onPress={goRegister}>
          <Text style={styles.buttonsText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.15}}>
        <Text style={styles.infoText}>{registrationInfo}</Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 0.75,
    justifyContent: 'center',
    opacity: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'rgb(235,235,235)',
    marginHorizontal: 25,
    marginTop: 80,
  },
  titleText: {
    transform: [{translateX: 20}, {translateY: -32}],
    fontSize: 40,
    width: 170,
    height: 60,
    textAlign: 'center',
    opacity: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'rgb(139, 178, 227)',
  },
  infoText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  registerButton: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'rgb(139, 178, 227)',
    borderTopWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopColor: 'black',
  },
  buttonsText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '100',
  },
});
