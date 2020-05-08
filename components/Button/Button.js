import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
