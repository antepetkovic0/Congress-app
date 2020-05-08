import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const DefaultInput = ({
  iconName,
  iconSize,
  placeholder,
  state,
  updateState,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon style={styles.inputIcon} name={iconName} size={iconSize} />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="black"
        value={state}
        onChangeText={txt => updateState(txt)}
      />
    </View>
  );
};

const SecurityInput = ({
  iconName,
  iconSize,
  placeholder,
  state,
  updateState,
  securityIconSize,
  securityState,
  updateSecurityState,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon style={styles.inputIcon} name={iconName} size={iconSize} />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor="black"
        //security state - true/false
        secureTextEntry={securityState}
        value={state}
        onChangeText={txt => updateState(txt)}
      />
      {securityState ? (
        <Icon
          style={styles.eyeIcon}
          name="eye"
          size={securityIconSize}
          onPress={() => {
            updateSecurityState(false);
          }}
        />
      ) : (
        <Icon
          style={styles.eyeIcon}
          name="eye-slash"
          size={securityIconSize}
          onPress={() => {
            updateSecurityState(true);
          }}
        />
      )}
    </View>
  );
};

export {DefaultInput, SecurityInput};
