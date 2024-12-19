import { Image, StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native';
import React from 'react';

const ActionCard = () => {
    function openWebsite(url:string){
        Linking.openURL(url)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Travelling Experience Blog</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://indiator.com/tourist-places/wp-content/uploads/2019/01/When-Where-to-Go-in-India-2019.png',
          }}
          style={styles.image}
        />
        <Text style={styles.description} numberOfLines={3}>
          India is a country of extremes. And travel experience in India is going to be an emotional roller coaster ride. For you cannot be enough prepared for India, no matter how much you try, especially if you are coming from the European and North American countries. India can shock you.
        </Text>
      </View>
      <View style={styles.socialLinks}>
        <TouchableOpacity style={styles.button} onPress={() => openWebsite("https://taleof2backpackers.com/travel-experience-in-india/")}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openWebsite("https://www.instagram.com/yashashree.rao/")}>
          <Text style={styles.buttonText}>Follow Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    margin: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
