import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image, Picker, Alert } from 'react-native';
import Swiper from 'react-native-swiper'; // 1.5.13
import { Audio } from 'expo-av';

export default class App extends Component {
 constructor(props){
   super(props);
   this.onPressNext = this.onPressNext.bind(this);
   this.onPressAlarm = this.onPressAlarm.bind(this);
   this.OnPressTasks = this.OnPressTasks.bind(this);
   this.onPressPrev = this.onPressPrev.bind(this);
   this.onPressPrev2 = this.onPressPrev2.bind(this);
   this.playbackInstance = null;
 this.state = {time: this.value,
       task: this.value,
       hour: this.value,
       min: this.value,
       ampm: this.value,
     };
   }
 onAlarmPhysical() {
     let physicaltasks = require('./physical.json');
     var factNum = Math.floor(physicaltasks.length*Math.random());
     Alert.alert("Physical Task: " + '\n' + physicaltasks[factNum]["Task"]);
	 soundObject.stopAsync();
   }
 onAlarmTrivia() {
     let triviafacts = require('./trivia.json');
     var factNum = Math.floor(triviafacts.length*Math.random());
     //Alert.alert("Trivia Category: " + triviafacts[factNum]["Trivia Category"] + "\nTrivia Question: " + triviafacts[factNum]["Question"]);
     Alert.alert(
       "Trivia Question",
       triviafacts[factNum]["Question"],
       [
         {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
         {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
         {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer! Your alarm will be turned off")},
         {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
       ],
       {cancelable:false},
     );
	 soundObject.stopAsync();
   }
 onPressPrev = () => {
   this.refs.swiper.scrollBy(-1)
 }
 onPressPrev2 = () => {
   this.refs.swiper.scrollBy(-2);
 }
 onPressNext = () => {
   this.refs.swiper.scrollBy(1);
 }
 onPressAlarm = () => {
   this.refs.swiper.scrollBy(1);
 }
 OnPressTasks = () => {
   this.refs.swiper.scrollBy(2);
 }
 onCurrentAlarms = () => {
   this.refs.swiper.scrollBy(3);
 }
 saveData = async() => {
   let time1 = '';
   AsyncStorage.setItem('time', time1);
 }
 saveTask = async() => {
   let task1 = '';
   AsyncStorage.setItem('task',task1);
 }
 incorrectAnswer(){
   Alert.alert("Wrong Answer: Try Again");
 }
 correctAnswer(){
   Alert.alert("Correct Answer!");
 }
 chooseAlarm =()=>{
   if(this.state.task === "Physical")
   {
     let physicaltasks = require('./physical.json');
     var factNum = Math.floor(physicaltasks.length*Math.random());
     Alert.alert("Physical Task: " + '\n' + physicaltasks[factNum]["Task"]);
   }
   else if (this.state.task === "Educational")
   {
     let triviafacts = require('./trivia.json');
     var factNum = Math.floor(triviafacts.length*Math.random());
     //Alert.alert("Trivia Category: " + triviafacts[factNum]["Trivia Category"] + "\nTrivia Question: " + triviafacts[factNum]["Question"]);
     Alert.alert(
       "Trivia Question",
       triviafacts[factNum]["Question"],
       [
         {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
         {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
         {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer! Your alarm will be turned off")},
         {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert(
           "Wrong Answer: Try Again",
           triviafacts[factNum]["Question"],
           [
             {text: '(A)' + triviafacts[factNum]["IncorrectAnswer1"], onPress: ()=> Alert.alert("WRONG!!! The answer is C") },
             {text: '(B)' + triviafacts[factNum]["IncorrectAnswer2"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
             {text: '(C)' + triviafacts[factNum]["Answer"], onPress: ()=> Alert.alert("Correct Answer!")},
             {text: '(D)' + triviafacts[factNum]["IncorrectAnswer3"], onPress: ()=> Alert.alert('WRONG!!! The answer is C')},
           ],
           {cancelable:false},
         )},
       ],
       {cancelable:false},
     );
   }
 }
 setAlarm = () => {
   var timeNow = new Date();
   var timeNowHours = (timeNow.getHours()%12) * 3600;
   var timeNowMins = timeNow.getMinutes() * 60;
   var timeNowSecs = timeNowHours + timeNowMins;
   var timeFuture = this.state.hour * 3600 + this.state.min *60;
   var timeDif = (timeFuture - timeNowSecs) * 1000;
   if ( timeDif < 0 ) {
	   if (this.state.ampm = 'AM') {
			timeDif = timeDif + 12 * 3600 * 1000;
	   } else {
			timeDif = timeDif + 24 * 3600 * 1000;
	   }
   }
   setTimeout(this.chooseAlarm, timeDif);
   setTimeout(this._loadNewPlaybackInstance, timeDif)
 }
 
 componentDidMount() {
   Audio.setAudioModeAsync({
     allowsRecordingIOS: false,
     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
     playsInSilentModeIOS: true,
     shouldDuckAndroid: true,
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
     playThroughEarpieceAndroid: false,
   });
 }
 
 _loadNewPlaybackInstance(playing) {
   if (this.playbackInstance != null) {
      
       this.playbackInstance.unloadAsync();
       this.playbackInstance.setOnPlaybackStatusUpdate(null);
       this.playbackInstance = null;
    }
    const source = require('./audio/Wake-up-sounds.mp3');
    const initialStatus = {
         shouldPlay: true,
         rate: 1.0,
         shouldCorrectPitch: true,
         volume: 1.0,
         isMuted: false
    };
    const { sound, status } = Audio.Sound.createAsync(
        source,
        initialStatus
   );
   this.playbackInstance = sound;
}
 
 componentWillUnmount() {
   this.playbackInstance.unloadAsync();
 }
render(){
 return (
 <Swiper style={styles.wrapper} showsButtons={true} ref={'swiper'}>
   <View style={styles.titleContainer}>
     <Image source={require('./pics/alarmcolorred.jpg')} style={{width: 375, height:375}}/>
     <Text style={styles.text}>The app that gets your a** out of bed</Text>
     <View style={styles.button}>
       <Button onPress={this.onPressNext} title="GO TO SETTINGS PAGE" color='white'></Button>
     </View>
   </View>
 <View style={styles.container}>
   <Text style={styles.title2}>Settings Page</Text>
   <View style={styles.button}>
     <Button onPress={this.onPressAlarm} title="SET ALARM PAGE" color='white'></Button>
   </View>
   <View style={styles.button}>
     <Button onPress={this.OnPressTasks} title="CHOOSE TASK PAGE" color='white'></Button>
   </View>
   <View style={styles.button}>
     <Button onPress={this.onCurrentAlarms} title="SEE CURRENT ALARM" color='white'></Button>
   </View>
 </View>
 <View style={styles.container}>
 <Text style={styles.title}>Time Set: </Text>
 <Text style={styles.title1}>{this.state.hour}:{this.state.min} {this.state.ampm}</Text>
 <View style={{flex: '1', flexDirection:'row', justifyContent:'center'}}>
 <View style = {{width:'30%'}}>
 <Picker
   selectedValue={this.state.hour}
   onValueChange={(itemValue, itemIndex) => this.setState({hour : itemValue})}
 >
 <Picker.Item label="Set Hour" value="Set Hour" />
 <Picker.Item label="1" value="1" />
 <Picker.Item label="2" value="2" />
 <Picker.Item label="3" value="3" />
 <Picker.Item label="4" value="4" />
 <Picker.Item label="5" value="5" />
 <Picker.Item label="6" value="6" />
 <Picker.Item label="7" value="7" />
 <Picker.Item label="8" value="8" />
 <Picker.Item label="9" value="9" />
 <Picker.Item label="10" value="10" />
 <Picker.Item label="11" value="11" />
 <Picker.Item label="12" value="12" />
 </Picker>
 </View>
 <View style = {{width:'30%'}}>
 <Picker
   selectedValue={this.state.min}
   onValueChange={(itemValue, itemIndex) => this.setState({min : itemValue})}
 >
 <Picker.Item label="Set Minute" value="Set Minute" />
 <Picker.Item label="00" value="00" />
 <Picker.Item label="01" value="01" />
 <Picker.Item label="02" value="02" />
 <Picker.Item label="03" value="03" />
 <Picker.Item label="04" value="04" />
 <Picker.Item label="05" value="05" />
 <Picker.Item label="06" value="06" />
 <Picker.Item label="07" value="07" />
 <Picker.Item label="08" value="08" />
 <Picker.Item label="09" value="09" />
 <Picker.Item label="10" value="10" />
 <Picker.Item label="11" value="11" />
 <Picker.Item label="12" value="12" />
 <Picker.Item label="13" value="13" />
 <Picker.Item label="14" value="14" />
 <Picker.Item label="15" value="15" />
 <Picker.Item label="16" value="16" />
 <Picker.Item label="17" value="17" />
 <Picker.Item label="18" value="18" />
 <Picker.Item label="19" value="19" />
 <Picker.Item label="20" value="20" />
 <Picker.Item label="21" value="21" />
 <Picker.Item label="22" value="22" />
 <Picker.Item label="23" value="23" />
 <Picker.Item label="24" value="24" />
 <Picker.Item label="25" value="25" />
 <Picker.Item label="26" value="26" />
 <Picker.Item label="27" value="27" />
 <Picker.Item label="28" value="28" />
 <Picker.Item label="29" value="29" />
 <Picker.Item label="30" value="30" />
 <Picker.Item label="31" value="31" />
 <Picker.Item label="32" value="32" />
 <Picker.Item label="33" value="33" />
 <Picker.Item label="34" value="34" />
 <Picker.Item label="35" value="35" />
 <Picker.Item label="36" value="36" />
 <Picker.Item label="37" value="37" />
 <Picker.Item label="38" value="38" />
 <Picker.Item label="39" value="39" />
 <Picker.Item label="40" value="40" />
 <Picker.Item label="41" value="41" />
 <Picker.Item label="42" value="42" />
 <Picker.Item label="43" value="43" />
 <Picker.Item label="44" value="44" />
 <Picker.Item label="45" value="45" />
 <Picker.Item label="46" value="46" />
 <Picker.Item label="47" value="47" />
 <Picker.Item label="48" value="48" />
 <Picker.Item label="49" value="49" />
 <Picker.Item label="50" value="50" />
 <Picker.Item label="51" value="51" />
 <Picker.Item label="52" value="52" />
 <Picker.Item label="53" value="53" />
 <Picker.Item label="54" value="54" />
 <Picker.Item label="55" value="55" />
 <Picker.Item label="56" value="56" />
 <Picker.Item label="57" value="57" />
 <Picker.Item label="58" value="58" />
 <Picker.Item label="59" value="59" />
 </Picker>
 </View>
 <Picker
   style={{width:'30%'}}
   selectedValue={this.state.ampm}
   onValueChange={(itemValue, itemIndex) => this.setState({ampm : itemValue})}
 >
 <Picker.Item label="AM/PM" value="AM/PM" />
 <Picker.Item label="AM" value="AM" />
 <Picker.Item label="PM" value="PM" />
 </Picker>
 </View>
 <View style={styles.button2}>
   <Button onPress={this.onPressPrev} title="RETURN TO SETTINGS PAGE" color='white'></Button>
 </View>
 </View>
   <View style={styles.container}>
   <Text style={styles.title}>Set Tasks Page</Text>
 <Picker
   style={{width:'30%'}}
   selectedValue={this.state.task}
   onValueChange={(itemValue, itemIndex) => this.setState({task : itemValue})}
 >
 <Picker.Item label="" value="" />
 <Picker.Item label="Physical" value="Physical" />
 <Picker.Item label="Educational" value="Educational" />
 </Picker>
 <Text style={styles.text}>Task Set: {this.state.task}</Text>
 <View style={styles.button3}>
   <Button onPress={this.onPressPrev2} title="RETURN TO SETTINGS PAGE" color='white'></Button>
 </View>
 </View>
 <View style={styles.container}>
   <Text style={styles.title}>See Current Alarms</Text>
 <Text style={styles.text}>Current Alarm: </Text>
 <Text style={styles.text}> {this.state.hour}:{this.state.min} {this.state.ampm}</Text>
   <Text style={styles.text}>Current Task: {this.state.task}</Text>
   <View style={styles.button2}>
   <Button onPress={this.setAlarm} title="SAVE ALARM" color='white'></Button>
 </View>
   <View style={styles.button}>
   <Button onPress={this.onCurrentAlarms} title="RETURN TO HOMEPAGE" color='white'></Button>
 </View>
 </View>
</Swiper>
 );}
}
const styles = StyleSheet.create({
 wrapper: { },
 titleContainer:{
   flex: 1,
   backgroundColor: '#fa1a53',
   alignItems: 'center',
   justifyContent: 'center'
 },
 container: {
   flex: 1,
   backgroundColor: '#fa1a53',
   alignItems: 'center',
 },
 setalarm:{
   flex: 1,
   backgroundColor: '#fa1a53',
 },
 button: {
   textAlign:'center',
   backgroundColor:"black",
   borderWidth: 1,
   borderColor: '#fff',
   borderStyle: "solid",
   width: 350,
   height: 100,
   justifyContent: "center",
   margin: 5,
 },
 button2: {
   textAlign:'center',
   backgroundColor:"black",
   borderWidth: 1,
   borderColor: '#fff',
   borderStyle: "solid",
   width: 350,
   height: 100,
   justifyContent: "center",
   marginBottom: 35,
 },
 button3: {
   textAlign:'center',
   backgroundColor:"black",
   borderWidth: 1,
   borderColor: '#fff',
   borderStyle: "solid",
   width: 350,
   height: 100,
   justifyContent: "center",
   marginTop: 50,
 },
 title:{
   color:'black',
   fontWeight: "bold",
   fontSize: 35,
   marginBottom: 30,
   marginTop: 30,
   },
 title2:{
   color:'black',
   fontWeight: "bold",
   fontSize: 35,
   marginBottom: 140,
   marginTop: 30,
   },
 title1:{
   color:'black',
   fontWeight: "bold",
   fontSize: 80,
   marginBottom: 60,
   marginTop: 30,
   },
 text:{
   color:'black',
   fontWeight: 'bold',
   fontSize: 30,
   margin: 20,
   textAlign:'center',
 },
 text1:{
   color:'black',
   fontWeight: 'bold',
   fontSize: 15,
   marginTop: 0,
   textAlign:'center',
   marginBottom: 0,
  },
  text2:{
   color:'black',
   fontWeight: 'bold',
   fontSize: 24,
   marginTop: 30,
   textAlign:'center',
   marginBottom: 0,
 },
 bigTitle: {
   color:'black',
   fontWeight: "bold",
   fontSize: 50,
   margin: 15,
   textAlign:'center',
 }
});



