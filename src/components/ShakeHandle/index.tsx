import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RNShake from 'react-native-shake';

const ShakeHandle = () => {
  useEffect(() => {
    RNShake.addListener(() => {
      //   alert('shake');
    });

    return () => {
      RNShake.removeAllListeners();
    };
  }, []);
  return (
    <View>
      <Text>ShakeHandle</Text>
    </View>
  );
};

export default ShakeHandle;
