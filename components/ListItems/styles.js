import {StyleSheet} from 'react-native';

const speakerStyles = StyleSheet.create({
  containerName: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  image: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  containerInfo: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 195, 0, 0.2)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

const lectureStyles = StyleSheet.create({
  item: {
    marginHorizontal: 15,
  },
  containerName: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  sectionTitle: {
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
    fontSize: 24,
    fontWeight: '400',
    borderWidth: 2,
  },
});

export {speakerStyles, lectureStyles};
