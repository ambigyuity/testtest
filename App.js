/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import SignInScreen from './src/views/SignInScreen';


const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen>123 duc dumb duc</SignInScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});

export default App;
