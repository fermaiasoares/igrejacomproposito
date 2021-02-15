import React from 'react';
import { View } from 'react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';

// import { Container } from './styles';

const codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME
}

const App: React.FC = () => {
  return <View />;
}

export default codePush()(App);