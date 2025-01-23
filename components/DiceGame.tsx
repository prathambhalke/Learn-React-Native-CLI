import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import diceone from '../assets/images/dice-one.png';
import dicetwo from '../assets/images/dice-two.png';
import dicethree from '../assets/images/dice-three.png';
import dicefour from '../assets/images/dice-four.png';
import dicefive from '../assets/images/dice-five.png';
import dicesix from '../assets/images/dice-six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const DiceGame = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceone);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const diceRoll = () => {
    // Start opacity animation
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Change the dice image after fade-out
    const randomNumber = Math.ceil(Math.random() * 6);
    switch (randomNumber) {
      case 1:
        setDiceImage(diceone);
        break;
      case 2:
        setDiceImage(dicetwo);
        break;
      case 3:
        setDiceImage(dicethree);
        break;
      case 4:
        setDiceImage(dicefour);
        break;
      case 5:
        setDiceImage(dicefive);
        break;
      case 6:
        setDiceImage(dicesix);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll the Dice</Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image style={styles.diceImage} source={diceImage} />
      </Animated.View>
      <Pressable style={styles.button} onPress={diceRoll}>
        <Text style={styles.buttonText}>Roll</Text>
      </Pressable>
    </View>
  );
};

export default DiceGame;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#e74e',
    width: 120,
    height: 40,
    borderRadius: 12,
    marginVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
