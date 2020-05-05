import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Swiper from 'react-native-swiper'; // 1.5.13

export default class App extends Component {
  constructor(props){
    super(props);
    this.onPressNext = this.onPressNext.bind(this);
    this.state = {
      idxActive: 1,
      name: '',
      latitude:30,
      longitude: 30,
      temp: 0,
      unit: 'Celsius',
      isF: false,
      town: null,
      weather: null,
      loaded: false,
    };
  }
    onPressPrev = () => {
      this.refs.swiper.scrollBy(-1)
    }
  
    onPressNext = () => {
      this.refs.swiper.scrollBy(1);
    }

  render() {
  return (
 <Swiper style={styles.wrapper} showsButtons={true} ref={'swiper'}>
 <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TextInput value={this.state.name}
      onChangeText={(name) => this.setState({name})}
      style={styles.textin}
      placeholder = "Type your name here!"
      />
      <View style={styles.button}>
        <Button onPress={this.onPressNext} title="Submit" color='black'>Submit</Button>
      </View>
    </View>
    <View>
      <Text style={styles.title}>Your Current Latitude and Longitude</Text>
      <Text style={styles.otherText}>Latitude: {this.state.latitude}</Text>
      <Text style={styles.otherText}>Longitude: {this.state.longitude}</Text>
      <Text style={styles.name}>{this.state.name}</Text>
    </View>
    <View>
      <Text style={styles.title}>Current Weather</Text>
      <Text style={styles.otherText}>Latitude: {this.state.latitude}</Text>
      <Text style={styles.otherText}>Latitude: {this.state.longitude}</Text>
      <Text style={styles.otherText}>Weather: {this.state.weather}</Text>
      <Text style={styles.otherText}>Temperature: {this.state.temp} C</Text>
      <Text style={styles.names}>{this.state.name}</Text>
    </View>
  </Swiper>);
  }
  //next classes
  componentDidMount() {
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
    }

    componentDidUpdate(){
        fetch(
        'http://api.openweathermap.org/data/2.5/weather?lat=25&lon=25&APPID=fe5c652c594e6319ff66f52dff6b8237&units=metric'
        )
        .then(res => res.json())
        .then(json => {
        this.setState({
        temp: json.main.temp,
        town: json.name,
        weather: json.weather[0].description,
        loaded: true,
        });
        });
        }
    }
 const styles = StyleSheet.create({
  wrapper: { },
  title:{
    color:'black',
    fontWeight: "bold",
    fontSize: 30,
    margin: 15,
    textAlign:'center',
  },
  otherText: {
    color: 'black',
    fontSize: 25,
    margin: 20,
    textAlign:'center',
   },
  name: {
    textAlign:'center',
    fontSize: 30,
    color: 'green',
    marginTop: 310,
   },
  names:{
    textAlign:'center',
    fontSize: 30,
    color: 'green',
    marginTop:205,
   
   },
  textin:{
    paddingTop: 5,
    color:'black',
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderWidth: 1,
    textAlignVertical: "center",
    backgroundColor:'darkgray',
    margin: 30,
    borderRadius:10,
    height:50,
    width: 200,
  },});
