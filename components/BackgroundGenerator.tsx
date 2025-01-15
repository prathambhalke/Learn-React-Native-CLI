import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const BackgroundGenerator = () => {
    const [generatedBgColor, setGeneratedBgColor] = useState("#000")
    const generateBackground = () => {
        const hexValues = "0123456789ABCD";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            const element = hexValues[Math.floor(Math.random() * hexValues.length)];
            color += element;
        }
        setGeneratedBgColor(color)
    }
  return (
    <>
      <StatusBar backgroundColor={"#000"} />
      <View style={[styles.container, {backgroundColor:generatedBgColor}]}>
        <TouchableOpacity onPress={generateBackground}>
          <View style={styles.colorButton}>
            <Text style={styles.colorButtonText}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BackgroundGenerator;

const styles = StyleSheet.create({
  colorButton: {
    borderColor:"#000",
    backgroundColor:"#2196F3",
    width:100,
    padding:5,
    borderRadius:5,
},
  colorButtonText: {
    textAlign:'center',
    color:"#fff"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:800
  },
});
