import { Text, View,Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';



const Home = () => (

      <View style={styles.view}>
          <Image style={styles.tinyLogo} source={require('../medias/black-disney.png')}/>
          <Text>Content de vous revoir ! Que comptez-vous regarder aujourd'hui ?</Text>
        <View style={styles.infos}>
          <Text>Les différents studios :</Text>
          <View style={styles.banners}>
            <Link href="marvel"><Image style={styles.banner} source={require('../medias/marvel-banner.png')}/> </Link>
            <Link href="disney"><Image style={styles.banner} source={require('../medias/disney-banner.png')}/> </Link>
            <Link href="pixar"><Image style={styles.banner} source={require('../medias/pixar-banner.png')}/> </Link>
            <Link href="marvel" style={{flex: 1, alignItems: "center"}}>Profil</Link>

          </View>
        </View>
  
      </View>
    );
    
  

  const styles = StyleSheet.create({

    view:{
        alignItems: 'center',
    },
    infos: {

        width:390,
        height: 400,
        alignItems:'center',
        marginBottom: 300,
        marginTop: 70,

    },
    tinyLogo: {
      marginTop: 20,
      height: 60,
      width: 170,
    },
    banners: {
      // backgroundColor: 'red',
      width: '100%',
      height: 400,

    }
    ,
    banner: {
      // marginTop: 20,
      width: '100%',
      height: 150,
      marginBottom: 0,
      // border: '1px solid black',
    }

    


  });

  export default Home;