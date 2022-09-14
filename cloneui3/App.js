import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Stack, Button, TextInput } from "@react-native-material/core";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.text0}>CODE</Text>
            </View>
            <View style={styles.row2}>
                <Text style={styles.text1}>VERIFICATION</Text>
            </View>
            <View style={styles.row3}>
                <Text style={styles.text2}>
                  Enter ontime password sent on ++849092605798
                </Text>
            </View>
            <View style={styles.row4}>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
              <View style={styles.item_block}></View>
            </View>
            <View style={styles.row5}>
              <Button variant="outlined" title="VERIFY CODE" color="white" style={{width:300}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        padding:10,
        color:"white",
    },
    row1:{
    },
    row2:{
      marginTop:30,
    },
    row3:{
      marginTop:30,
    },
    row4:{
      marginTop:30,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    row5:{
      marginTop:30,
    },
    text1:{
      color:"white",
    },
    text2:{
      color:"white",
      textAlign:"center",
      
    },
    text3:{
      color:"white",
    },
    btn1:{
      marginRight:10,
      width: 100,
    },
    text0:{
      color:'white',
      fontSize:60,
    },
    item_block:{
      width: 50,
      borderWidth:1,
      height: 50,
    }
});
