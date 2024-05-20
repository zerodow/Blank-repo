import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RNShake from 'react-native-shake';
import RouteName from '../../routes/RouteName';
import {navigate} from '../../utilities/helper/navigationHelper';

const ShakeHandle = () => {
  useEffect(() => {
    RNShake.addListener(() => {
      navigate(RouteName.NETWORK_LOG);
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
