import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ThemeToggle from './components/ThemeToggle';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

function App() {
  return (
    // <ThemeToggle />
    <SafeAreaView>
      <ScrollView horizontal={false}>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1A1A1D',
  },
});

export default App;
