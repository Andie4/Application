import { Text, View,Ul, Li } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from 'expo-image';
import { Link } from 'expo-router';
// import { listMarvel } from './data'



const Marvel = () => (

      <View style={styles.view}>
          <Image style={styles.tinyLogo} source={require('../../medias/black-disney.png')}/>
        <View style={styles.infos}>
          {/* <View style={styles.banners}>
            <Link href="marvel"><Image style={styles.banner} source={require('../../medias/marvel-banner.png')}/> </Link>
          </View> */}
          <Text>Les films du studios Marvel :</Text>

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
    }

    


  });

  export default Marvel;