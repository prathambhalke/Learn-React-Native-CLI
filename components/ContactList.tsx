import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  interface ContactDataType {
    uid: number;
    name: string;
    company: string;
    imageUrl: string;
  }

  const contactData: ContactDataType[] = [
    {
      uid: 1,
      name: 'Prathamesh Bhalke',
      company: 'HMX Media',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      uid: 2,
      name: 'Aman Mulnai',
      company: 'RazorPay',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGK26wheX3e8w/profile-displayphoto-shrink_400_400/B4DZO6VAV6GUAg-/0/1733997889360?e=1740614400&v=beta&t=KKUfQp9lBqWqSUs0-fFksEe0KY6AcSv0W7OUaG3jxxo',
    },
    {
      uid: 3,
      name: 'Ganesh Nagargoje',
      company: 'RazorPay',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      uid: 4,
      name: 'Vaibhav Matere',
      company: 'Siemens',
      imageUrl: 'https://via.placeholder.com/100',
    },
    {
      uid: 5,
      name: 'Preeti Wadhwani',
      company: 'Red Hat',
      imageUrl: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.scrollContainer}>
        {contactData.map(({ uid, name, company, imageUrl }) => (
          <View key={uid} style={styles.card}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              accessibilityLabel={`Image of ${name}`}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userCompany}>{company}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#8B5DFF',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    borderColor:"#000"
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  userCompany: {
    fontSize: 16,
    color: '#fff',
  },
});
