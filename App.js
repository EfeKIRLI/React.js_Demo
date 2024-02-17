import React, {useState,useEffect,useRef} from "react";
// import { useBatteryLevel } from 'expo-battery';
import { SafeAreaView, StyleSheet, Text, View, ScrollView,Button } from 'react-native';
import Card from './src/Card';
import Mytext from './components/MyText/MyText';
import MyText from './components/MyText/MyText';
import Item from './components/Item/Item'; 
// import { useState } from 'react';

// export default function App() {
//   const batteryLevel = useBatteryLevel(); }

  const App = () => {
    let array = Array(100).fill(0)
    const scrollViewRef = useRef(null);

    const handleClick = () => {
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    };

    const [text,setText] = useState("Hello useState");

    useEffect(() => {
      console.log("The text has rendered")
    },[text])
 
    return (
      <SafeAreaView>   
        <Button onPress={handleClick} title ={'Scroll to top'} />
        <ScrollView ref={scrollViewRef}>
          {array.map((value, index) => ( 
          <Text key={index}> Scroll!!! {index} </Text>
          ))}
           
        </ScrollView>
        <Button onPress={handleClick} title ={'Scroll to top'} />
        
        
        <View style={{backgroundColor:'blue',height:100,}}>
          <Text style={{margin:20}}>
            This is going to be our header container
          </Text>

          <Text onPress={() => setText(" I learned how to change state! by using onPress ")}>{text}</Text>

        </View>
        
        {/* ıtem componenti içindeki verileri(name ve price) Props yani özelliklerini olusturmalıyız. */}
  
    
        <View 
        style = {{
          position:'relative', 
          backgroundColor:'yellow',
          padding:60
          }}> 
         <View 
          style={{
            position:'relative',
            top:5,
            // bottom:5,
  
            backgroundColor :'green',
            // margin: 10,
            marginTop: 110,
            margingleft:1,
            marginBottom: 10,
            marginRight:4,
  
            // padding:10,
            // paddingLeft:50,
            paddingHorizontal:10,
            paddingVertical:15,
  
  
  
            borderWidth:1, 
            borderTopWidth:5, 
            borderLeftWidth:5,
            borderRightWidth:5,
            borderBottomWidth:5,
            borderColor:'red',
            borderColor:'#15099d',
            borderRadius:10,
            // borderTopLeftRadius: 6,
            // borderBottomEndRadius:5,
            // borderTopRightRadius:0,
  
          
            
            }}>
  
         {/* <Text>--Current Battery Level: {batteryLevel}
         </Text> */}
         </View>
  
        <View 
        style = {{
          backgroundColor :'blue',
          borderWidth:5,
          borderColor:'black',
          marginVertical:50,
          marginHorizontal:50,
          alignItems:'center',
          padding:10,
          paddingBottom:5,
          paddingRight:1,
          paddingLeft:5,
  
          position:'absolute',
          top:10,
          left:5,
          right:40,
  
          
  
          
        
  
          
          
        }}> 
        <Text 
        style={{
          color:'black',
          fontSize:13
          }}>
        This is an example of a Text component in React Native. Tap on me!
        Try NEW !
        </Text>
        </View>
       <Card />
         <View style={{backgroundColor:'gray'}}>
           <MyText/>
           <MyText/>
           <MyText/>
         </View>
       </View> 
  
       <Item name={"table"} price={5000}/> 
       <Item name={"chair"} price={1000}/> 
       <Item name={"mouse"} price={3500}/> 
       <Item name={"pc"} price={42000}/> 
       <Item name={"keyboard"} price={4500}/>
  
       <View>
         <Text style={{fontStyle:'italic',fontWeight:'600'}}>
          All rights reserved.
         </Text>
       </View>
      </SafeAreaView>
    );
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

  export default App;
