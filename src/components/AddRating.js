import React, { Component } from 'react';
import {View, Text,StyleSheet, Image, TextInput} from 'react-native';
import {Button} from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var data = {name: "Tacos Lokos 4ever", location: "120 Franklin St Brooklyn, NY 11222", phone: "(646) 325-9567"};

export default class AddRating extends Component {

  submitAnswer(){
      var myAns = this.state.answer.replace(" ", "%20");
      var myURL = "http://34.212.68.217:8080/insertComment?restaurant_id=462a6065f964a520d9451fe3&eco_ratings=YES&bio_ratings=NO&comment=" + myAns + "&comment_user=user2&time_stamp=2012-12-31%2011:30:45";

     fetch(myURL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      Actions.pop();
    }


  render(){
    return(
      <View>
        <View style={{marginTop:90, marginLeft: 20, flexDirection:'row'}}>
          <View style={{flex:0.3}}>
            <Image source={require('./img/group_img.png')} style={{height: 100, width: 100, margin: 20, borderWidth: 2}} />
          </View>
          <View style={{flex:0.6, margin: 20,marginLeft: 80}}>
            <Text style={{fontSize: 20, fontWeight:'bold', marginBottom: 15}}>{data.name}</Text>
            <Text>{data.location}</Text>
            <Text>{data.phone}</Text>
          </View>



        </View>
        <View style={{flexDirection:'row', height: 90}}>
          <View style={{flex:0.6, margin: 30}}>
            <Text style={{fontSize:17}}>Separate bins for recyclables, compostables and landfill waste?</Text>
          </View>
          <View style={{flex:0.4, margin: 30, marginBottom: 10, flexDirection:"row"}}>
            <RadioForm
              radio_props={[{label:"Yes",value:0},{label:"No",value:0}]}
              initial={0}
              buttonSize={6}
              formHorizontal={true}
              labelStyle={{marginRight: 5, paddingLeft: 4, fontWeight: 'bold'}}
              onPress={(value) => {this.setState({value:value})}}
            />
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:0}}>
          <View style={{flex:0.6, margin: 30}}>
            <Text style={{fontSize:17}}>Biodegradable dishes/utensils?</Text>
          </View>
          <View style={{flex:0.4, margin: 30, marginBottom: 10, flexDirection:"row"}}>
            <RadioForm
              radio_props={[{label:"Yes",value:0},{label:"No",value:0}]}
              initial={0}
              buttonSize={6}
              formHorizontal={true}
              labelStyle={{marginRight: 5, paddingLeft: 4, fontWeight: 'bold'}}
              onPress={(value) => {this.setState({value:value})}}
            />
          </View>
        </View>

        <View>
          <Text style={{fontSize:17, marginLeft:30, marginRight: 30}}>Comments</Text>
          <TextInput
            style={{ borderColor: 'gray', borderWidth: 1, marginTop: 20, marginLeft: 30, marginRight:30, borderRadius: 30, height: 100, padding: 30, color:"black",fontSize:18}}
            multiline={true}
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:"center", flex:1,marginTop: 20}}>
          <Button style={{justifyContent:"center",backgroundColor:"green",borderWidth:1.8, borderColor: 'white'}} onPress={this.submitAnswer.bind(this)}><Text style={{color:"white", fontSize:25}}>Submit</Text></Button>
        </View>
      </View>
    );
  }

}
