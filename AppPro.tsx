import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(isDarkMode);

  const containerStyle = [
    Styles.container,
    {backgroundColor: theme ? '#000' : '#fff'},
  ];

  const textStyle = theme ? Styles.whiteText : Styles.blackText;
  const borderColor = theme ? 'green' : 'red';

  return (
    <View style={containerStyle}>
      <View style={[Styles.innerContainer, {borderColor}]}>
        <Text style={[textStyle, Styles.largeStyle]}>Toggle Theme</Text>
        <Switch
          value={theme}
          onValueChange={() => {
            setTheme(!theme);
          }}
        />
      </View>
      <Text style={textStyle}>Change the theme by toggling!</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 50,
    borderWidth: 2,
    width: 300,
    height: 100,
    marginBottom: 10,
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
  largeStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppPro;
