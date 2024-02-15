import { useBatteryLevel } from 'expo-battery';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';
import Mytext from './components/MyText/MyText';
import MyText from './components/MyText/MyText';
import Item from './components/item/item'; 

export default function App() {
  const batteryLevel = useBatteryLevel();

  return (
    <SafeAreaView> 
      <View style={{backgroundColor:'blue',height:100}}>
        <Text>
          This is going to be our header container
        </Text>
      </View>
      
      <Item/>
  
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

       <Text>--Current Battery Level: {batteryLevel}
       </Text>
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
     <View>
       <Text>
        All rights reserved.
       </Text>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
