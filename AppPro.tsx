import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={Styles.container}>
      <Text style={isDarkMode ? Styles.whiteText: Styles.blackText}>Hello World!</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#ffc0cb',
  },
});

export default AppPro;
