import React, { useState , useEffect} from  'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import NewsCard from '../componets/NewsCard';
import NewsApi from "../api/News-api"
import axios  from "axios";


const News =()=>{

    const [news,setNews]=useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [Loading,setLoading] = useState(true);

  useEffect(()=>{

    getNewsfromapi()

  },[isRefreshing])


  function getNewsfromapi(){
    const options = {
      method: 'GET',
      url: 'https://sri-lanka-news-api.p.rapidapi.com/news/sinhala/Lankadeepa.lk/data/1',
      headers: {
        'X-RapidAPI-Key': '32b44093b9msh6fa629daea0ba97p18a505jsn2f31cd158b39',
        'X-RapidAPI-Host': 'sri-lanka-news-api.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      //console.log(response.data);
      setNews(response.data)
      
    })
    
    .catch(function (error) {
      //console.warn(error);
      (error);
      
    })
    .finally(()=>{
        setLoading(false)
    })
    

  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Fetch your updated data and set it using setData
    setIsRefreshing(false);
  };

  console.log(isRefreshing)

    return(
    <View style={styles.container}>
        

        {Loading ?  (<ActivityIndicator size="large" color="#0000ff" />

        ) :
    
        
        <FlatList 
          data={news.data}

          keyExtractor={(item , index) => 'key' + index}
          renderItem={({item}) => <NewsCard items={item} />}

     
        />

           }

        <StatusBar style="auto" />
        
    </View>
    )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 loadingtxt:{
   color:'#3366ff',
   alignSelf:"center",
   alignItems:"center",
   alignContent:'center',
   justifyContent:"center",
   fontSize:15,
   fontWeight:"500"
 }

});

export default News;
