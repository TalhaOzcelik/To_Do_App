import React from 'react';
//NOT : Uygulamayı çalıştırmak için cmd den o dizine gidip npx react-native run-android yazılmalıdır.
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './src/Router';

const App = () => {
  return (
    <View style={styles.Container}>
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  txt: {
    color: 'yellow',
  },
});

export default App;


