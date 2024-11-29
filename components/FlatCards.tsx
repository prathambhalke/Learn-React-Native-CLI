import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Orange</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 12,
  },
  container: {
    flex:1,
    flexDirection:'row',
    padding:12
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width: 100,
    height: 100,
    margin:8
  },
  cardOne: {backgroundColor: '#e74c3c'},
  cardTwo: {backgroundColor: '#2ecc71'},
  cardThree: {backgroundColor: '#3498db'},
  cardFour: {backgroundColor: '#e67e22'},
});
