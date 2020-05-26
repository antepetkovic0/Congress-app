import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Switch} from 'react-native';
import {styles} from './styles';

const UserContainer = ({title, text, showMore}) => {
  //todo notifications
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={[
        styles.container,
        // title === 'Notifications'
        //   ? {backgroundColor: 'rgba(191, 112, 95, 0.3)'}
        //   : title === 'Location'
        //   ? {backgroundColor: 'rgba(174, 191, 95, 0.3)'}
        //   : {backgroundColor: 'rgba(255, 195, 0, 0.2)'},
      ]}>
      <View
        style={[
          styles.header,
          title === 'Notifications'
            ? {backgroundColor: 'rgba(191, 112, 95, 0.3)'}
            : title === 'Location'
            ? {backgroundColor: 'rgba(174, 191, 95, 0.3)'}
            : {backgroundColor: 'rgba(255, 195, 0, 0.3)'},
        ]}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={
            title === 'Notifications'
              ? require('../../pictures/notification.png')
              : title === 'Location'
              ? require('../../pictures/location.png')
              : require('../../pictures/timeline.png')
          }
          style={{tintColor: 'black'}}
        />
      </View>
      <View style={styles.body}>
        <Text>{text}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            title === 'Notifications'
              ? {backgroundColor: 'rgba(191, 112, 95, 0.5)'}
              : title === 'Location'
              ? {backgroundColor: 'rgba(174, 191, 95, 0.5)'}
              : {backgroundColor: 'rgba(255, 195, 0, 0.5)'},
          ]}
          onPress={showMore}>
          <Text>Show more</Text>
        </TouchableOpacity>
        {title === 'Notifications' ? (
          <View style={{flexDirection: 'row'}}>
            <Text style={{textAlignVertical: 'center'}}>
              Mute notifications?
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'rgba(191, 112, 95, 0.5)'}}
              thumbColor={isEnabled ? 'rgb(191, 112, 95)' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export {UserContainer};
