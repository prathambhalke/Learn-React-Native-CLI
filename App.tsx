import React from 'react';
import {SafeAreaView, View, Text, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ThemeToggle from './components/ThemeToggle';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import Pass from './components/password_generator/Pass';
import PasswordGenerator from './components/password_generator/PasswordGenerator';
import BackgroundGenerator from './components/BackgroundGenerator';
import DiceGame from './components/DiceGame';

function App() {
  return (
    // <ThemeToggle />
    <SafeAreaView>
      <ScrollView horizontal={false}>
        {/* <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard /> */}
        {/* <Pass /> */}
        {/* <BackgroundGenerator /> */}
        <DiceGame />
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
