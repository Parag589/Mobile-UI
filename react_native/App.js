import React from 'react';
import { StyleSheet, View, SafeAreaView, Text,Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <Separator/>
    
    <Image style={styles.ic1} source={require('../icons/arrowleft.png')} />
    <Image style={styles.ic} source={require('../icons/hambur.png')} />
   
     
    <View style={styles.whole}>
      <Text style={{margin:0,fontFamily: "arial", fontWeight:"bold",fontSize:18}}>Shade Control</Text>
      
      <Text style={{fontSize:10,opacity: 0.7,marginLeft:2 ,fontFamily: "Arial " }}>
        Living Room
      </Text>
      </View>
      
      <Text style={styles.txtheading}>SCENES</Text>
    
     <View style={styles.fixToText}>
    <View style={styles.btn2}>
    <Image style={styles.ic3} source={require('../icons/rocket.png')} />
      <Text style={styles.btntxt}>All Off</Text>
    </View>
    <View style={styles.btn2}>
    <Image style={styles.ic3} source={require('../icons/rocket.png')} />
      <Text style={styles.btntxt}>Bright</Text>
    </View>
   </View><View style={styles.fixToText}>
    <View style={styles.btn2}>
    <Image style={styles.ic3} source={require('../icons/rocket.png')} />
      <Text style={styles.btntxt}>All Off</Text>
    </View>
    <View style={styles.btn2}>
    <Image style={styles.ic3} source={require('../icons/rocket.png')} />
      <Text style={styles.btntxt}>Bright</Text>
    </View>
    </View>

    <Text style={styles.txtheading}>GROUP CONTROLS</Text>
    <View style={styles.fixToText}>
    <View style={styles.btn2}>
      <Text style={styles.btntxt}>More Open</Text>
    </View>
    <View style={styles.btn2}>
      <Text style={styles.btntxt}>More Close</Text>
    </View>
    </View> 
    <Text style={styles.txtheading}>CONTROLS</Text>
    <View style={styles.btn1}>
    <Image style={styles.ic2} source={require('../icons/arrowright.png')} />
    
    <Text style={styles.ic4}>Window Roller Blind OFF</Text>
    </View>
    
    <View style={styles.fixToText}>
    <View style={styles.btn3}>
      <Text style={styles.btntxt}>Open</Text>
    </View>
    <View style={styles.btn3}>
      <Text style={styles.btntxt}>Pause</Text>
    </View>
    <View style={styles.btn3}>
      <Text style={styles.btntxt}>Close</Text>
    </View>
   </View>   
   <View style={styles.fixToText}>
    <View style={styles.btn2}>
      <Text style={styles.btntxt}>BLACKOUT</Text>
    </View>
    <View style={styles.btn2}>
      <Text style={styles.btntxt}>FLIP+</Text>
    </View>
    </View>
      
  </SafeAreaView>
);

 const containerStyle={backgroundColor:"redy"}
const styles = StyleSheet.create({
 
  title: {
    textAlign: 'center',
    marginVertical: 80,
  },
  
  whole: {
    textAlign: 'left',
    margin: 5,
  },  

  ic1:{
    width:"4%",
    height:"4%",
    opacity:0.8,
    flexDirection: 'row',
    opacity:0.6,
  },

  ic2:{
    width:20,
    height:20,
    opacity:0.6,
    margin:7,
    borderRadius:"100%",
  },

  ic3:{
    width:25,
    height:25,
    marginLeft:50,
    marginRight:-45,
  },

  ic4:{
    width:140,
  },

  ic:{
    width:"5%",
    height:"5%",
    marginLeft:"94%",
    opacity:0.8,
    marginTop:-18,
    marginBottom:10,
  },

  obj2: {
    margin: 0,
  },

  txtheading:{
    fontSize:11,
    fontWeight:'bold',
    margin:3,
    opacity:0.6,
  },
  
  btn1:{
    height:50,
    alignItems:'center',
    textAlign:'left',
    backgroundColor:'#EEEEEE',
    flexDirection: 'row',
    margin:"1%"
  },

  btn2:{
    width:"48%",
    height:50,
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#EEEEEE',
    flexDirection: 'row',
    margin:"1%",
    
  },
  btn3:{
    width:"31%",
    height:50,
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#EEEEEE',
    flexDirection: 'row',
    margin:"1%",
  },
  btntxt:{
    flexDirection: 'row',
    marginLeft:'auto',
    marginRight:'auto',
    Color:"red",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  separator: {
    marginVertical: 5,
  },
});

export default App;