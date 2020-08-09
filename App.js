import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./assets/mona.png")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // change me to another color: like pink, blue, purple, red
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
