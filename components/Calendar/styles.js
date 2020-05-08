import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: 'rgba(51, 153, 255, 0.27)',
    borderWidth: 1,
    borderColor: 'rgb(51, 153, 255)',
  },
  body: {
    flex: 10,
    flexDirection: 'row',
  },
  footer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(51, 153, 255, 0.27)',
    borderWidth: 1,
    borderColor: 'rgb(51, 153, 255)',
  },
  item: {
    marginVertical: 3,
    height: Dimensions.get('window').height / 7,
    borderWidth: 2,
  },
  plenary: {
    backgroundColor: 'rgba(191, 112, 95, 0.5)',
    borderColor: 'rgb(191, 112, 95)',
  },
  invited: {
    backgroundColor: 'rgba(174, 191, 95, 0.5)',
    borderColor: 'rgb(174, 191, 95)',
  },
});

export {styles};
