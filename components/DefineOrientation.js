import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const defineOrientation = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get('window'),
  );

  useEffect(() => {
    const orientationChanged = result => {
      setWindowDimensions(result.window);
    };
    //event handler argument => object with window and screen properties(width, height) - values
    Dimensions.addEventListener('change', orientationChanged);
    return () => Dimensions.removeEventListener('change', orientationChanged);
  });

  return {
    ...windowDimensions,
    isLandscape: windowDimensions.width > windowDimensions.height,
  };
};

export {defineOrientation};
