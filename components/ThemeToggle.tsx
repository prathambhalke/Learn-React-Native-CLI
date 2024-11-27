import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, useColorScheme} from 'react-native';

function ThemeToggle(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState(isDarkMode);

  const containerStyle = [
    Styles.container,
    {backgroundColor: theme ? '#1c1c1c' : '#f5f5f5'},
  ];

  const textStyle = theme ? Styles.whiteText : Styles.blackText;
  const borderColor = theme ? '#4caf50' : '#f44336'; // Subtle green or red

  return (
    <View style={containerStyle}>
      <View style={[Styles.innerContainer, {borderColor}]}>
        <Text style={[textStyle, Styles.largeStyle]}>🌗 Theme Toggle</Text>
        <Switch
          value={theme}
          onValueChange={() => setTheme(!theme)}
          thumbColor={theme ? '#4caf50' : '#f44336'} // Thumb color for the switch
          trackColor={{false: '#ccc', true: '#81c784'}} // Track color
        />
      </View>
      <Text style={textStyle}>Change the theme with a smooth toggle! ✨</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    width: 320,
    height: 80,
    marginBottom: 20,
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  blackText: {
    color: '#1c1c1c',
    fontSize: 18,
    fontWeight: '600',
  },
  largeStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default ThemeToggle;
