import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';

export default function App() {

  function onPressButton() {
    Alert.alert('Final Four!')
    }

  let pic = { uri:
    'https://www1.villanova.edu/content/villanova/unicommunication/brandguidelines/UniversityLogosandHierarchy/university-logo-examples/_jcr_content/widgetiparsys/textimage_0/image.img.png/1483981998255.png'};
  return (
    <View style={styles.container}>
      <Image source={pic} style={{width: 200, height:180}}/>
      <Text style={styles.title}>Villanova University</Text>
      <Text style={styles.otherText}>Beebe Jackson</Text>
      <Text style={styles.otherText}>My First Project</Text>

      <View style={styles.buttonContainer}>
      <Button onPress={onPressButton} style={{borderWidth: 1, borderColor: 'red'}} title="Press Me"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
   },
   otherText: {
    color: 'lightgray',
    fontSize: 20,
   },
  container: {
    flex: 1,
    backgroundColor: '#001F5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'lightgray',
     margin: 30,
     borderRadius: 10,
    },
});
