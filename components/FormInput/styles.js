import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 70,
    width: '100%',
  },
  inputText: {
    paddingLeft: 45,
    marginHorizontal: 25,
    borderRadius: 25,
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.27)',
    borderWidth: 1,
    borderColor: 'black',
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 37,
  },
  eyeIcon: {
    position: 'absolute',
    top: 11,
    right: 5,
  },
});

export {styles};
