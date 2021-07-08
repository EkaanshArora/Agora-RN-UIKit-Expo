import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '<Your Agora App ID>',
    channel: 'test',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <SafeAreaView>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <Text onPress={()=>setVideoCall(true)}>Start Call</Text>
    </SafeAreaView>
  );
};

export default App;
