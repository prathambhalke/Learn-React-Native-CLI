import React from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import FlatCards from "./components/FlatCards";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return(
    // <ThemeToggle />
   <SafeAreaView>
       <ScrollView>
        <FlatCards />
      </ScrollView> 
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#1A1A1D'
  },
})

export default App;