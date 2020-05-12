import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {lectureStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function SectionHeader({section}) {
  const {title} = section;
  return (
    <Text
      style={[
        lectureStyles.sectionTitle,
        title === 'Plenary lectures'
          ? {
              backgroundColor: 'rgba(191, 112, 95, 0.5)',
              borderColor: 'rgb(191, 112, 95)',
            }
          : {
              backgroundColor: 'rgba(174, 191, 95, 0.5)',
              borderColor: 'rgb(174, 191, 95)',
            },
      ]}>
      {title}
    </Text>
  );
}

const Details = ({lecture}) => {
  console.log(lecture);
  const {
    fromTime,
    toTime,
    date,
    classroom,
    description,
    plenary,
    speaker,
  } = lecture;
  const speakerName = speaker[0].name;
  const speakerSurname = speaker[0].surname;

  return (
    <View
      style={[
        lectureStyles.infoContainer,
        plenary === 'da'
          ? {backgroundColor: 'rgba(191, 112, 95, 0.3)'}
          : {backgroundColor: 'rgba(174, 191, 95, 0.3)'},
      ]}>
      <Text style={{fontWeight: 'bold'}}>
        Date: <Text style={{fontWeight: 'normal'}}>{date}</Text>
      </Text>
      <Text style={{fontWeight: 'bold'}}>
        Time:{' '}
        <Text style={{fontWeight: 'normal'}}>
          {fromTime} - {toTime}
        </Text>
      </Text>
      <Text style={{fontWeight: 'bold'}}>
        Classroom: <Text style={{fontWeight: 'normal'}}>{classroom}</Text>
      </Text>
      {/* <Text style={{fontWeight: 'bold'}}>
        Speaker:{' '}
        <Text style={{fontWeight: 'normal'}}>
          {speakerName} {speakerSurname}
        </Text>
      </Text> */}
      <TouchableOpacity onPress={{}}>
        <Text>
          Speaker: {speakerName} {speakerSurname}
        </Text>
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold'}}>
        Description: <Text style={{fontWeight: 'normal'}}>{description}</Text>
      </Text>
    </View>
  );
};

const LectureItem = ({lecture}) => {
  const [isClicked, setIsClicked] = useState(false);
  const {title} = lecture;

  return (
    <View style={lectureStyles.item}>
      <View style={lectureStyles.containerName}>
        <Text style={{fontSize: 18}}>{title}</Text>
        {isClicked ? (
          <Icon
            name="chevron-circle-up"
            size={25}
            color={'rgb(51, 153, 255)'}
            onPress={() => setIsClicked(false)}
          />
        ) : (
          <Icon
            name="chevron-circle-down"
            size={25}
            color={'rgba(51, 153, 255, 0.7)'}
            onPress={() => setIsClicked(true)}
          />
        )}
      </View>
      {isClicked ? <Details lecture={lecture} /> : <></>}
    </View>
  );
};

export {LectureItem, SectionHeader};
