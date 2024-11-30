import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headingText}>Trending Places 🗺️</Text>
      <View style={styles.card}>
  <Image
    style={styles.imageCard}
    source={{
      uri: 'https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg',
    }}
  />
  <View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Jaipur, Rajasthan</Text>
    <Text style={styles.cardLabel}>The Pink City of India</Text>
    <Text style={styles.cardDescription}>
      Jaipur is known for its royal heritage, vibrant culture, and iconic
      landmarks such as the Hawa Mahal and Amer Fort.
    </Text>
    <Text style={styles.cardFooter}>Explore more</Text>
  </View>
</View>

<View style={styles.card}>
  <Image
    style={styles.imageCard}
    source={{
      uri: 'https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/.jpg',
    }}
  />
  <View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Goa, India</Text>
    <Text style={styles.cardLabel}>The Land of Beaches</Text>
    <Text style={styles.cardDescription}>
      Goa is famous for its sandy beaches, vibrant nightlife, and Portuguese heritage. A tropical paradise for travelers.
    </Text>
    <Text style={styles.cardFooter}>Explore more</Text>
  </View>
</View>

<View style={styles.card}>
  <Image
    style={styles.imageCard}
    source={{
      uri: 'https://www.transindiatravels.com/wp-content/uploads/ladakh.jpg',
    }}
  />
  <View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Ladakh, India</Text>
    <Text style={styles.cardLabel}>The Land of High Passes</Text>
    <Text style={styles.cardDescription}>
      Ladakh offers breathtaking landscapes, serene monasteries, and the thrill of adventure with its high-altitude roads.
    </Text>
    <Text style={styles.cardFooter}>Explore more</Text>
  </View>
</View>

<View style={styles.card}>
  <Image
    style={styles.imageCard}
    source={{
      uri: 'https://www.keralasoils.gov.in/sites/default/files/inline-images/kerala1.jpg',
    }}
  />
  <View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Kerala, India</Text>
    <Text style={styles.cardLabel}>God’s Own Country</Text>
    <Text style={styles.cardDescription}>
      Kerala is known for its tranquil backwaters, lush greenery, and vibrant traditions, offering a serene retreat.
    </Text>
    <Text style={styles.cardFooter}>Explore more</Text>
  </View>
</View>

<View style={styles.card}>
  <Image
    style={styles.imageCard}
    source={{
      uri: 'https://www.transindiatravels.com/wp-content/uploads/taj-mahal.jpg',
    }}
  />
  <View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Agra, Uttar Pradesh</Text>
    <Text style={styles.cardLabel}>Home of the Taj Mahal</Text>
    <Text style={styles.cardDescription}>
      Agra is synonymous with the Taj Mahal, a UNESCO World Heritage Site and a symbol of eternal love.
    </Text>
    <Text style={styles.cardFooter}>Explore more</Text>
  </View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: '#f8f9fa', // Light background for better contrast
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    overflow: 'hidden',
    marginVertical:8
  },
  imageCard: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2937', // Darker gray for title
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4b5563', // Muted gray
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7280', // Neutral gray for readability
    marginBottom: 15,
  },
  cardFooter: {
    fontSize: 14,
    color: '#2563eb', // Bright blue for call-to-action
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default FancyCard;
