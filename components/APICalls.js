const registerUser = async newUser => {
  const userToRegister = {
    email: newUser.email,
    username: newUser.username,
    password: newUser.password,
  };

  try {
    const response = await fetch(
      'https://conferencesplit.herokuapp.com/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToRegister),
      },
    );
    //server returning us message -> "user" registered...
    const res = await response.json();
    //if we dont return variable .then(res => console.log(res))
    //will return UNDEFINED -> if we return will return message
    return res;
  } catch (err) {
    console.log('Register error:', err);
  }
};

const loginUser = async user => {
  const userToLogin = {
    username: user.username,
    password: user.password,
  };

  try {
    const response = await fetch(
      'https://conferencesplit.herokuapp.com/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToLogin),
      },
    );

    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Login error:', err);
  }
};

const getUserProfile = async token => {
  try {
    const response = await fetch(
      'http://conferencesplit.herokuapp.com/users/profile',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    //const res = await response.json();
    // if (response.status === 200) {
    //   let user = res;
    //   return user;
    // }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Profile error:', err);
  }
};

const getSpeakers = async () => {
  try {
    const response = await fetch(
      'https://conferencesplit.herokuapp.com/speakers',
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in getting speakers:', err);
  }
};

const getLectures = async () => {
  try {
    const response = await fetch(
      'https://conferencesplit.herokuapp.com/lectures',
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in getting lectures', err);
  }
};

const getLecturesByDay = async day => {
  try {
    const response = await fetch(
      `https://conferencesplit.herokuapp.com/lectures/${day}`,
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in getting lectures by day:', err);
  }
};

const saveLectureForTimeline = async (mail, lectureId) => {
  try {
    const response = await fetch(
      `https://conferencesplit.herokuapp.com/users/${mail}/${lectureId}`,
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in saving lectures for timeline:', err);
  }
};

const removeLectureFromTimeline = async (mail, lectureId) => {
  try {
    const response = await fetch(
      `https://conferencesplit.herokuapp.com/users/remove/${mail}/${lectureId}`,
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in removing lectures from timeline:', err);
  }
};

const getLecturesForTimeline = async mail => {
  try {
    const response = await fetch(
      `https://conferencesplit.herokuapp.com/users/timeline/${mail}`,
    );
    const res = await response.json();
    return res;
  } catch (err) {
    console.log('Error in getting lectures for timeline:', err);
  }
};

export {
  registerUser,
  loginUser,
  getUserProfile,
  getSpeakers,
  getLectures,
  getLecturesByDay,
  saveLectureForTimeline,
  removeLectureFromTimeline,
  getLecturesForTimeline,
};
