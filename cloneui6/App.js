import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, tou, TouchableHighlight } from 'react-native';
import { Stack, Button, TextInput } from "@react-native-material/core";
import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(1)
  const incre=()=>{
    setNum(num+1)
  }
  const decre=()=>{
    if(num>0){
      setNum(num-1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.image}>
          <Image style={styles.tinyLogo} source={require('./imgs/book.png')}/>
          <Text style={{marginRight:20}}>Mã giảm giá</Text>
        </View>
        <View style={styles.ItemInfo}>
          <Text>Nguyên hàm tích phân và ứng dụng</Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text style={{fontSize:18, color:"red", fontWeight:"bold"}}>141.800 đ</Text>
          <Text style={{textDecorationLine:"line-through"}}>141.800 đ</Text>
          <View style={styles.action}>
            <View style={styles.action_left}>
              <TouchableHighlight onPress={decre}>
                <Image style={{width:20, height:20}} source={require('./imgs/btnminus.png')}/>
              </TouchableHighlight>
              <Text>{num}</Text>
              <TouchableHighlight onPress={incre}>
                <Image style={{width:20, height:20}} source={require('./imgs/btnadd.png')}/>
              </TouchableHighlight>
            </View>
            <View style={styles.action_right}>
              <Text style={{color:"blue"}}>Mua sau</Text>
            </View>
          </View>
          <Text>Xem tại đây</Text>
        </View>
      </View>
      <View style={styles.containerItem2}>
        <View>
          <Button variant="outlined" title="Mã giảm giá" color="#d4ac2d" />
        </View>
        <View>
          <Button title="Áp dụng" />
        </View>
      </View>
      <View style={{backgroundColor:"#ccc", width:"100%", height:20, marginTop:30}}></View>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginTop:20}}>
        <Text style={{fontSize:12}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={{fontSize:12}}>Nhập tại đây?</Text>
      </View>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginTop:20}}>
        <Text style={{fontSize:12}}>Tạm tính</Text>
        <Text style={{fontSize:12}}>{num*141.800}đ</Text>
      </View>
      <View style={{backgroundColor:"#ccc", width:"100%", height:120, marginTop:30}}></View>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginTop:20}}>
        <Text style={{fontSize:12}}>Thành tiền</Text>
        <Text style={{fontSize:12}}>{num*141.800} đ</Text>
      </View>
      <Button title="Thanh toán" color="error" style={{width:350, marginTop:30}}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo:{
    display: "flex",
    flexDirection:"row",
  },
  ItemInfo:{
    display:"flex",
    marginLeft:10,
    justifyContent:"space-around",
  },
  action:{
    display: "flex",
    flexDirection:"row",
    justifyContent:'space-between'
  },
  action_left:{
    display: "flex",
    flexDirection:"row",
  },
  containerItem2:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20,
    width:"100%",
  }
});
