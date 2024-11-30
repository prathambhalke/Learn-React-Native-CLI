import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards, styles.cardTwo]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards, styles.cardThree]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards, styles.cardFour]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>😂😆😉</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 8,
    borderColor: '#0009',
    backgroundColor: '#e74e',
  },
  cardOne: {backgroundColor: '#e74e'},
  cardTwo: {backgroundColor: '#2ec1'},
  cardThree: {backgroundColor: '#98db'},
  cardFour: {backgroundColor: '#e672'},

  elevatedCards: {
    elevation: 8,
    shadowOffset: {
      height: 12,
      width: 12,
    },
  },
});
