import { StatusBar } from 'expo-status-bar';
import { Dimensions, Modal, PixelRatio, StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screen/Home'
import SettingScreen from './screen/Setting'
import AdaScreen from './screen/Ada'
import { SafeAreaView } from 'react-native-safe-area-context';
import MawbimaScreen from './screen/Deshaya';
import { useState } from 'react';

const {width,height}=Dimensions.get('window')

const screenhight =PixelRatio.roundToNearestPixel(height);
let x: any;


{height>700? x=30 : x=50}



export default function App() {

  const [showWarning,setshowWarning]=useState(false);

  const Header = () => {
    return (
      
        <View style={styles.manior_headercomponetcontoller}>
          <View style={styles.headerstyletext}>
            <Text style={{ fontWeight: '500', fontSize:20,}}>Lanka news</Text>
          </View>
          <View style={{justifyContent:"flex-end"}}>
            <Ionicons name="information-circle" size={24} color="black" style={{alignSelf:'flex-end',alignContent:'flex-end' }} onPress={()=>setshowWarning(!showWarning)} />
          </View>
        </View>
      
    );
  };

  const Tab = createMaterialTopTabNavigator();


  return (
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <Modal
        transparent
        visible={showWarning}
        animationType='slide'
      > 
      
      <View style={styles.showMassageModle}>
          <View style={styles.modlebtn}>
              <Button title='close' onPress={()=>setshowWarning(!showWarning)}/> 
          </View>
          <View style={styles.textinfo}>
            <Text>This application is for educational purposes only and is not intended for any commercial purposes or distribution. </Text>
            <Text style={{padding:20}}>© Dhanjaya chathuranga.</Text>
            <Text>All rights reserved..</Text>
          </View>
      </View>
      

      </Modal>

      
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: {backgroundColor:"#ffff" },
        tabBarBounces:true
        
       
        
      }}

      
      >
        <Tab.Screen name="Ada" component={AdaScreen} options={{ title:'අද'}}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{title:'BBC'}}/>
        <Tab.Screen name="Settings" component={SettingScreen} options={{ title:'ලංකාදීප'}}/>
        <Tab.Screen name="Deshaya" component={MawbimaScreen} options={{ title:'දේශය'}}/>
        

      </Tab.Navigator>
    </NavigationContainer>

    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  headerstyletext:{
    flex:1,
    height:x, 
    backgroundColor: null,
    justifyContent:"flex-end",
    alignItems:'center'
  },
  manior_headercomponetcontoller:{
    flexDirection:'row',
    marginHorizontal:20
  },
  
 showMassageModle:{
    height:'60%',
    backgroundColor:"#ffffff",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    shadowColor:"#b3b3b3",
        shadowOffset:{width:0.5 , height: 0.5},
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5
    
  },
  modlebtn:{
    position:'absolute',
    alignSelf:'flex-end',
    paddingRight:20,
    paddingTop:20
  },
  textinfo:{
    
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:'30%'
    
  }
}) 