import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import FlatCards from "./components/FlatCards";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return(
  //  <SafeAreaView>
  //      <ScrollView>
  //       <Text>App</Text>
  //       <FlatCards />
  //     </ScrollView> 
  //     </SafeAreaView>
      <ThemeToggle />
  )
}

const styles = StyleSheet.create({})

export default App;