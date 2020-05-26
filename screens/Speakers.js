import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getSpeakers} from '..//components/APICalls';
import {SpeakerItem} from '../components/ListItems/SpeakerItem';

const Speakers = () => {
  //todo - make speaker clickable from lectures
  const [speakers, setSpeakers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const filterSearch = text => {
    const newData = speakers.filter(item => {
      const itemData = `${item.name.toLowerCase()} ${item.surname.toLowerCase()}`;

      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  useEffect(() => {
    //{data: [{id:1, name:"Ante"...},{}...]}
    getSpeakers().then(res => {
      setSpeakers(res.data);
      setFilteredData(res.data);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      {speakers.length !== 0 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.barContainer}>
            <Image
              source={require('../pictures/searchUser.png')}
              style={styles.barIcon}
            />
            <TextInput
              onChangeText={txt => filterSearch(txt)}
              placeholder={'Search for speaker...'}
              maxLength={30}
            />
          </View>
          <FlatList
            data={filteredData}
            renderItem={({item}) => <SpeakerItem speaker={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

export default Speakers;

const styles = StyleSheet.create({
  barContainer: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(51, 153, 255, 0.27)',
    borderWidth: 1,
    borderColor: 'rgb(51, 153, 255)',
    marginBottom: 10,
  },
  barIcon: {
    position: 'absolute',
    right: 1,
    top: 3,
    tintColor: 'grey',
    borderRadius: 100,
  },
});
