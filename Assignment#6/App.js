import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeStamp: 'placeholder',
      latitude:null,
      longitude:null,
      error: null,
  };
}

//Geolocation info for if I was actually on campus

/*componentDidMount() {
  navigator.geolocation.getCurrentPosition(
  (position) => {
  this.setState({
  latitude: position.coords.latitude,
  longitude: position.coords.longitude,
  error: null,
  });
  },
  (error) => this.setState({ error: error.message }),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}*/

onButtonPress() {
  var distance = [];
  var buildingFacts= [];
  var a = 0;
  var b = 0;
  let building = require('./Building.json');
  let facts = require('./Facts.json');
  for(var i = 0; i < 4; i++) {
    latDif = building[i]["Latitude"] - this.state.latitude;
    longDif = building[i]["Longitude"] - this.state.longitude;
    latSqr = Math.pow(latDif, 2);
    longSqr = Math.pow(longDif, 2);
    distance[i] = latSqr + longSqr;
  }

  var closestNum = Math.min(distance[0], distance[1], distance[2], distance[3]);
    
  if (distance[0] == closestNum){
    a = 0;
    b = 8;
  }
  if (distance[1] == closestNum){
    a = 1;
    b = 8;
  }
  if (distance[2] == closestNum){
    a = 2;
    b = 6;
  }
  if (distance[3] == closestNum){
    a = 3;
    b = 5;
  }
    
  for (var k = 0; k < 27; k++) {
    if (facts[k]["Building"] == building[a]["Building"]) {
      buildingFacts.push(facts[k]["Fact"]);
    }
  }

  var factNum = Math.floor(b*Math.random());
  Alert.alert('About My Location', "Latitude: " + this.state.latitude 
          + "\nLongitude: " + this.state.longitude
          + "\n\nClosest Building: " + building[a]["Building"]
          + "\n\nRandom Fact: " + buildingFacts[factNum]
          + "\n\nTime Stamp: " + this.state.timeStamp);

}
 
render() {
setInterval(function(){this.setState({timeStamp: new  Date().toLocaleString()});}.bind(this), 1000);
return (
  <View style={styles.container}>
    <Text style={styles.title}>Villanova University Interactive Tour</Text>
    <TextInput style={styles.textin} value={this.state.latitude}
      onChangeText={(latitude) => this.setState({latitude})}
      style={styles.textin}
      placeholder = "Type your Latitude here!" />
    <TextInput style={styles.textin} value={this.state.longitude}
      onChangeText={(longitude) => this.setState({longitude})}
      style={styles.textin}
      placeholder = "Type your Longitude here!"/>       
    <View style={styles.button}>
      <Button onPress={() => this.onButtonPress()} title='Tell Me About My Location' color='white' fontWeight='bold' ></Button>
    </View>
    <View style={styles.timeStamp}>
      <Text style={styles.text}>Current Date and Time: {this.state.timeStamp}</Text>
    </View>
  </View>
)
}
 
}
  const styles = StyleSheet.create({
   wrapper: { },
   text:{
     fontSize:27,
   },
   title:{
     color:'black',
     fontWeight: "bold",
     fontSize: 33,
     margin: 30,
     textAlign:'center',
     paddingTop:20
   },
   textin:{
      paddingTop: 40,
      color:'black',
      fontSize: 30,
      textAlign:'center',
    },
   container: {
     flex: 1,
     backgroundColor: 'aquamarine',
     alignItems: 'center',
     justifyContent: 'center',
   },
   button:{
     borderWidth: 1,
     textAlignVertical: "center",
     backgroundColor:'black',
     margin: 50,
     borderRadius:10,
     height:70,
     width: 250,
     justifyContent: "center",
    },
   timeStamp:{
      flex:1,
      justifyContent: 'flex-end',
      marginBottom: 36, 
    },
});

