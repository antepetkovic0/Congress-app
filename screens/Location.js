import React from 'react';
import {WebView} from 'react-native-webview';

const Location = () => {
  return (
    <WebView
      //originWhitelist={['*']}
      source={{
        uri:
          'https://www.google.com/maps/place/Prirodoslovno-matemati%C4%8Dki+fakultet+u+Splitu+(PMFST)/@43.5118043,16.4662206,17z/data=!3m1!4b1!4m5!3m4!1s0x13355e3ceac0bef5:0x260e43ea0e249ed1!8m2!3d43.5118043!4d16.4684093',

        // html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10237.708193395401!2d16.464101075732792!3d43.50905676321976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x260e43ea0e249ed1!2sPrirodoslovno-matemati%C4%8Dki%20fakultet%20u%20Splitu%20(PMFST)!5e0!3m2!1shr!2shr!4v1588000708620!5m2!1shr!2shr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
      }}
    />
  );
};

export default Location;
