import { Text, View,Ul, Li } from "react-native";
import { StyleSheet, Button, Alert } from "react-native";
import { Image } from 'expo-image';
// import { Link } from 'expo-router';
// import { listMarvel } from './data'
import { useState } from 'react';




const Marvel = () => {
  const [films, setFilms] = useState([]) 


  const fetchList = async () => {
    try {
      const elementList = await fetch('http://172.20.10.2:3000/film/list',{
        method: "GET", 
        headers: { "Content-Type": "application/json" },

      });
      
      
      const data = await elementList.json();
      setFilms(data)
      console.log(data)

      

    } catch (eror) {
      Alert.alert("erreur lors de l'affichage des films")
    }
  };


  return (

      <View style={styles.view}>
          <Image style={styles.tinyLogo} source={require('../../medias/black-disney.png')}/>
        <View style={styles.infos}>
          <Text style={styles.nomFilm}>Les films du studios Marvel :</Text>   

            {films.map((film) => (
              <Text key={film._id} style={{ marginBottom: 10 }}>
                <Text>{film.nom}</Text>
                <Text>{film.date}</Text>
                <Text>{film.realisateur}</Text>
              </Text>
          ))};
        </View>
  
      </View>
    );
  };

  const styles = StyleSheet.create({

    view:{
        alignItems: 'center',
    },
    infos: {

        width:390,
        height: 400,
        alignItems:'center',
        marginBottom: 30,
        marginTop: 20,

    },
    tinyLogo: {
      marginTop: 50,
      height: 60,
      width: 170,
    },
    banners: {
      // backgroundColor: 'red',
      width: '100%',
      height: 400,
      alignItems: 'center',

    }
    ,
    banner: {
      // marginTop: 20,
      width: 500,
      height: 150,
      marginBottom: 10,
      border: '1px solid black',
    },
    nomFilm: {
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 50,
    }

    


  });

  export default Marvel;