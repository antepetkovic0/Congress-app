import React from 'react';
import {View, Text, Alert} from 'react-native';
import {styles} from './styles';
import {saveLectureForTimeline, getUserProfile} from '../APICalls';
import {getToken} from '../AsyncStorage';
import Icon from 'react-native-vector-icons/FontAwesome';

const CalendarItem = ({lecture}) => {
  const {title, fromTime, toTime, plenary, id} = lecture;
  const speakerName = lecture.speaker[0].name;
  const speakerSurname = lecture.speaker[0].surname;

  return (
    <View
      style={[styles.item, plenary === 'da' ? styles.plenary : styles.invited]}>
      <Text>{title}</Text>
      <Text>
        {fromTime} - {toTime}
      </Text>
      <Text>
        {speakerName} {speakerSurname}
      </Text>
      <Icon
        name="plus-square"
        size={20}
        onPress={() => {
          getToken().then(token => {
            getUserProfile(token).then(res => {
              if (res.status) {
                alert(
                  'You must be logged in to save lecture to your timeline.',
                );
              }
              if (res.user) {
                saveLectureForTimeline(res.user.email, id).then(res => {
                  if (res.nModified === 0) {
                    Alert.alert(
                      'Saving lecture info',
                      `You already have lecture ${title} in your timeline.`,
                      [
                        {
                          text: 'OK',
                          onPress: () => {},
                        },
                      ],
                    );
                  } else {
                    Alert.alert(
                      'Saving lecture info',
                      `Lecture ${title} has been added to your timeline.`,
                      [
                        {
                          text: 'OK',
                          onPress: () => {},
                        },
                      ],
                    );
                  }
                });
              }
            });
          });
        }}
        style={{position: 'absolute', right: 1, bottom: 1}}
      />
    </View>
  );
};

export {CalendarItem};
