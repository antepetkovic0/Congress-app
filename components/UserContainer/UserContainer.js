import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const UserContainer = ({title, text, iconName, showMore}) => {
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
      </View>
    </View>
  );
};

export {UserContainer};
