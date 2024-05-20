import React from 'react';
import NetworkLogger from 'react-native-network-logger';
import SafeViewWithBg from '../../components/SafeViewWithBg';
import Header from '../../components/SafeViewWithBg/Header';

const NetworkLog = () => {
  return (
    <SafeViewWithBg customHeader={() => <Header title={'Network Log'} />}>
      <NetworkLogger />
    </SafeViewWithBg>
  );
};

export default NetworkLog;
