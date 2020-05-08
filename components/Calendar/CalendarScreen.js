import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {getLecturesByDay} from '../APICalls';
import {CalendarItem} from './CalendarItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const CalendarScreen = ({day}) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    getLecturesByDay(day).then(res => {
      setLectures(res);
    });
  }, []);

  //get unique classroms
  const rooms = lectures.map(el => el.classroom);
  const uniqueRooms = Array.from(new Set(rooms));

  //get array of lectures for each classroom
  let arr = [];
  for (let i = 0; i < uniqueRooms.length; i++) {
    arr[i] = lectures.filter(lec => lec.classroom === uniqueRooms[i]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {uniqueRooms.map(room => {
          return (
            <Text style={{fontSize: 20, textAlignVertical: 'center'}}>
              {room}
            </Text>
          );
        })}
      </View>
      <View style={styles.body}>
        {arr.map(data => {
          return (
            <FlatList
              style={{flex: 1, marginHorizontal: 3}}
              data={data}
              renderItem={({item}) => <CalendarItem lecture={item} />}
              keyExtractor={item => item.id.toString()}
            />
          );
        })}
      </View>
      <View style={styles.footer}>
        <View>
          <Icon name="square" color={'rgb(191, 112, 95)'} size={20} />
          <Text>plenary</Text>
        </View>
        <View>
          <Icon name="square" color={'rgb(174, 191, 95)'} size={20} />
          <Text>invited</Text>
        </View>
        <View>
          <View>
            <Icon name="plus-square" size={20} />
          </View>
          <Text>add lecture to your timeline</Text>
        </View>
      </View>
    </View>
  );
};

export {CalendarScreen};
