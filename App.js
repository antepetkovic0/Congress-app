import 'react-native-gesture-handler';
import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//SCREENS
import IntroAnimation from './screens/IntroAnimation';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Speakers from './screens/Speakers';
import Lectures from './screens/Lectures';
//calendar screens
import CalendarDay1 from './screens/CalendarDay1';
import CalendarDay2 from './screens/CalendarDay2';
import CalendarDay3 from './screens/CalendarDay3';
//profile screens
import Logout from './screens/Logout';
import MyTimeline from './screens/MyTimeline';
import Notifications from './screens/Notifications';
import Location from './screens/Location';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const CustomHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'rgb(51, 153, 255)',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
      }}>
      <Image
        source={require('./pictures/back.jpg')}
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
          opacity: 0.7,
        }}
      />
      <Image
        style={{width: 125, height: 60, tintColor: 'black'}}
        source={require('./pictures/smdLogo.png')}
      />
      <Image
        style={{width: 60, height: 60, tintColor: 'black'}}
        source={require('./pictures/hmdLogo.png')}
      />
      <Image
        style={{width: 60, height: 60, tintColor: 'black'}}
        source={require('./pictures/pmfLogo.png')}
      />
      <Image
        style={{width: 55, height: 55, tintColor: 'black'}}
        source={require('./pictures/hazuLogo.png')}
      />
    </View>
  );
};

function TopTabNavigator({navigation}) {
  return (
    <TopTab.Navigator
      initialRouteName={'Day 1'}
      tabBarOptions={{labelStyle: {fontSize: 15}}}>
      <TopTab.Screen name="Day 1" component={CalendarDay1} />
      <TopTab.Screen name="Day 2" component={CalendarDay2} />
      <TopTab.Screen name="Day 3" component={CalendarDay3} />
    </TopTab.Navigator>
  );
}

function UserStack() {
  return (
    <Stack.Navigator initialRouteName={'Logout'}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTimeline"
        component={MyTimeline}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: 'grey',
        activeTintColor: 'rgb(51, 153, 255)',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Speakers"
        component={Speakers}
        options={{
          tabBarLabel: 'SPEAKERS',
          tabBarIcon: ({color, size}) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lectures"
        component={Lectures}
        options={{
          tabBarLabel: 'LECTURES',
          tabBarIcon: ({color, size}) => (
            <Icon name="folder-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={TopTabNavigator}
        options={{
          tabBarLabel: 'CALENDAR',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthenticationStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerTitle: 'Back to login'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={IntroAnimation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authentication"
          component={AuthenticationStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Application"
          component={TabNavigator}
          options={{
            header: props => <CustomHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
