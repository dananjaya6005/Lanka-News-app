import React from "react";
import { View,Image,StyleSheet,Text,Button, Dimensions, TouchableOpacity, Linking} from "react-native";


const {width , height} = Dimensions.get('window');

const NewsCard =({items})=>{

    return(
        
        
        <View style={styles.cardView}>
            <Text testID="title" style={styles.title}>{items.title}</Text>
            <Text testID="title" style={styles.author}>{items.timestamp}</Text>
            <Image style={styles.image} source={{uri:items.img}}/>
            <Text testID="description" style={styles.description}>{items.description}</Text>
            <TouchableOpacity style={styles.readmorebtn}
            onPress={ ()=> {Linking.openURL(items.url)}}
            >
                <Text style={{color:"#0066ff" ,fontWeight:"700"}}>Read more</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor:"#ffffff",
        margin:width*0.04,
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{width:0.5 , height: 0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5
    },
    image: {
      width:width*0.8,
      height:width*0.4,
      margin:10,
      alignSelf:'center'
    },
    title:{
        fontWeight:"bold",
        fontSize:16,
        margin:10
    },
    author:{
        marginLeft:10,
        fontStyle:"italic",
        color:"#000033"
    },
    description :{
        margin:10
        
    },
    readmorebtn:{
        margin:10,
    }


  });
  
export default NewsCard;