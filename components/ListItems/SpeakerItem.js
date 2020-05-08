import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {speakerStyles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = ({about}) => {
  //todo print infos from base
  return (
    <View>
      <Text>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </Text>
    </View>
  );
};

const SpeakerItem = ({speaker}) => {
  const {name, surname, about} = speaker;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View>
      <View style={speakerStyles.containerName}>
        <Image
          style={speakerStyles.image}
          source={require('../../pictures/vogan.png')}
        />
        <Text style={speakerStyles.title}>
          {name} {surname}
        </Text>
        {isClicked ? (
          <Icon
            name="chevron-circle-up"
            size={30}
            color={'rgb(51, 153, 255)'}
            onPress={() => setIsClicked(false)}
          />
        ) : (
          <Icon
            name="chevron-circle-down"
            size={30}
            color={'rgba(51, 153, 255, 0.7)'}
            onPress={() => setIsClicked(true)}
          />
        )}
      </View>
      <View style={speakerStyles.containerInfo}>
        {isClicked ? <Details about={about} /> : <></>}
      </View>
    </View>
  );
};

export {SpeakerItem};
