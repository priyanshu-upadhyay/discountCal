import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Constants from "expo-constants";

export default class App extends React.Component {
  state={amount:0, discount:0, result:0}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingblock}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "red" }}>
            Discount Calculator
          </Text>
        </View>

        <View style={styles.datablock}>
          <Text style={{ fontSize: 20 }}>Amount </Text>
          <TextInput style={styles.textbox} onChangeText = {(text)=>{this.setState({amount:text})}}/>
        </View>

        <View style={styles.datablock}>
          <Text style={{ fontSize: 20 }}>Discount % </Text>
          <TextInput style={styles.textbox} onChangeText = {(text)=>{this.setState({discount:text})}}/>
        </View>


        <View style={{ flex: 0.1, paddingHorizontal: 120, marginBottom:20, marginTop:50}}>
          <Button title="Calculate" onPress={()=>{this.setState({result:this.state.amount*this.state.discount/100})}}/>
        </View>


        <View style={styles.finalans}>

          <Text style={{fontSize:20, color:this.state.result? 'green':'red'}}>
            The Amount after Discount:
          </Text>

          <Text style={{fontSize:20, color:this.state.result? 'green':'red'}}>
          {this.state.amount - this.state.result}  
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    paddingTop: Constants.statusBarHeight,
  },
  headingblock: {
    padding:10,
    flex: 0.2,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  datablock: {
    flex: 0.2,
    paddingHorizontal: 60,
    marginTop:20,
    marginBottom:20,
  },
  textbox: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize:20,
    textAlign:"center",

  },
  finalans:{
    flex: 0.2,
    marginTop:30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  }
});
