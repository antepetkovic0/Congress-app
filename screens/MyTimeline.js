import React, {useState, useEffect} from 'react';
import Timeline from 'react-native-timeline-flatlist';
import {
  getLecturesForTimeline,
  removeLectureFromTimeline,
  getUserProfile,
} from '../components/APICalls';
import {getToken} from '../components/AsyncStorage';

const MyTimeline = () => {
  //todo async get profile
  const [dataTimeline, setDataTimeline] = useState([]);
  const [user, setUser] = useState({});

  const removeLecture = lecture => {
    removeLectureFromTimeline(user.email, lecture.id).then(res => {
      getLecturesForTimeline(user.email).then(res => {
        setDataTimeline(res);
      });
    });
    // const newSchedule = dataTimeline.filter(lec => lec.id !== lecture.id);
    // setDataTimeline(newSchedule);
  };

  useEffect(() => {
    getToken().then(token => {
      getUserProfile(token).then(res => {
        setUser(res.user);
        getLecturesForTimeline(res.user.email).then(res => {
          setDataTimeline(res);
        });
      });
    });
  }, []);

  return (
    <Timeline
      data={dataTimeline}
      onEventPress={removeLecture}
      options={{
        style: {paddingTop: 15},
      }}
      descriptionStyle={{color: 'gray'}}
      detailContainerStyle={{
        backgroundColor: '#BBDAFF',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
      }}
    />
  );
};

export default MyTimeline;
