import { AppLoading } from 'expo';
import { Provider } from 'mobx-react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Stores from './src/stores';
import AppNavigator from './src/navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <Provider {...Stores}>
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
        <View testID='welcome'>
          <Text>Open up App.js to start working on your app!</Text>
          <View>
            <TouchableOpacity
              style={{marginTop: 20, padding: 10, backgroundColor: 'beige'}}
              testID='MyUniqueId123'
            >
              <Text>Some button</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Provider>
    );
  } else {
    return (
      <Provider {...Stores}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <View testID='welcome'>
            <Text>Open up App.js to start working on your app!</Text>
            <View>
              <TouchableOpacity
                style={{marginTop: 20, padding: 10, backgroundColor: 'beige'}}
                testID='MyUniqueId123'
              >
                <Text>Some button</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
