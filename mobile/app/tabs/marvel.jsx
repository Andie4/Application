import { Text, View, StyleSheet, Alert } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Checkbox } from 'expo-checkbox';
import useAuthStore from "../../store/authStore";


const Marvel = () => {
  const [films, setFilms] = useState([]);
  const [filmsVusIds, setFilmsVusIds] = useState([]);
  const userId = useAuthStore(state => state.user._id);
  

  const fetchList = async () => {
    try {
      const elementList = await fetch("http://172.20.10.2:3000/film/list");
      const data = await elementList.json();
      setFilms(data);
    } catch (error) {
      Alert.alert("Erreur lors de l'affichage des films");
    }
  };

  const fetchFilmsVus = async () => {
    const res = await fetch(`http://172.20.10.2:3000/user/films-vus/${userId}`);
    const data = await res.json();
    setFilmsVusIds(data); 
  };

  const marquerVu = async (filmId) => {
    if (filmsVusIds.includes(filmId)) return;
  
    setFilmsVusIds([...filmsVusIds, filmId]);
  
    await fetch("http://172.20.10.2:3000/user/films", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, filmId }),
    });
    
  };

  
  
  useEffect(() => {
    fetchList();
    fetchFilmsVus();
  }, []);
  


  return (
    <View style={styles.view}>
      <Image style={styles.tinyLogo} source={require("../../medias/black-disney.png")} />

      <Text style={styles.title}>Les films du studio Marvel :</Text>
      
      <View style={styles.list}>
      {films.map((film) => (
  <View key={film._id} style={styles.wrap}>

              <View  style={styles.card}>
              <Checkbox
  value={filmsVusIds.includes(film._id)}
  onValueChange={(checked) => {
    if (checked) {
      marquerVu(film._id);
    }
  }}
/>
                <View style={styles.infos}>
                  <Text style={styles.titreFilm}>{film.nom}</Text>
                  <Text>Année de sortie : {film.date}</Text>
                  <Text>Réalisé par : {film.realisateur}</Text>
                </View>
              </View>
          </View>

        ))}
      </View>
    </View>

    
  );
};

  const styles = StyleSheet.create({

    view:{
      alignItems: 'center',

    },
    title:{
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 50,
      marginTop: 20
    },
    recomandations:{
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: 20,

    },
    infos:{
      width:400
    },
    titreFilm:{
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 10,
    },
    wrap:{
      flexWrap: "wrap"
    },
    card:{
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 2, 
      // backgroundColor: "#e6f7ff",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      width: 350,
      borderColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      flexWrap: "wrap"

    },
    archive:{
      marginTop: 30,
      marginBottom: 10,
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
    }

    


  });

  export default Marvel;