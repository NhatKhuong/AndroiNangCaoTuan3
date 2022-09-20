import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { Stack, Button, TextInput } from "@react-native-material/core";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.row2}>
                <Text style={styles.text1}>REGISTER</Text>
            </View>
            <View style={styles.row4}>
              <TextInput variant="outlined" label="Name" style={{width:300}} />
            </View>
            <View style={styles.row4}>
              <TextInput variant="outlined" label="Phone" style={{width:300}} />
            </View>
            <View style={styles.row4}>
              <TextInput variant="outlined" label="Email" style={{width:300}} />
            </View>
            <View style={styles.row4}>
              <TextInput variant="outlined" label="Password" style={{width:300}} />
            </View>
            <View style={styles.row4}>
              <TextInput variant="outlined" label="Birthday" style={{width:300}} />
            </View>
            <View style={styles.row5}>
            <Button title="REGISTER" color="#d4ac2d" style={{width:300}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFEAFB",
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
      color:"#000",
      fontSize:20,
    
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
    }
});
