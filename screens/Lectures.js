import React, {useState, useEffect} from 'react';
import {View, TextInput, SectionList, Image, StyleSheet} from 'react-native';
import {getLectures} from '../components/APICalls';
import {LectureItem, SectionHeader} from '../components/ListItems/LectureItem';

const Lectures = () => {
  const [lectures, setLectures] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const filterSearch = text => {
    const newData = lectures.reduce((result, section) => {
      const {title, data} = section;
      const filtered = data.filter(elem => {
        const tit = elem.title.toLowerCase();
        return tit.indexOf(text) > -1;
      });

      if (filtered.length !== 0) {
        result.push({
          title,
          data: filtered,
        });
      }
      return result;
    }, []);

    setFilteredData(newData);
  };

  useEffect(() => {
    //{data: [ { title: 'plenary', data: [{},{}...] }, { title: 'invited', data: [{},{},...] } ]}
    getLectures().then(res => {
      setLectures(res.data);
      setFilteredData(res.data);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.barContainer}>
        <Image
          source={require('../pictures/searchLecture.png')}
          style={styles.barIcon}
        />
        <TextInput
          onChangeText={txt => filterSearch(txt)}
          placeholder={'Search for lecture...'}
          maxLength={30}
        />
      </View>
      <SectionList
        sections={filteredData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <LectureItem lecture={item} />}
        renderSectionHeader={({section}) => <SectionHeader section={section} />}
      />
    </View>
  );
};

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

export default Lectures;
