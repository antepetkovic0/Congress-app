import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 3,
    marginVertical: 3,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  body: {
    flex: 2,
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  btnContainer: {
    borderRadius: 30,
    margin: 5,
    backgroundColor: 'rgb(139, 178, 227)',
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export {styles};
