import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image, ImageBackground } from 'expo-image';
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";

const Profil = () => {
  // fonction de déconnexion (dans le store)
  const logout = useAuthStore((state) => state.logout);
  

  // déconnexion
  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
  <ImageBackground source={require('../../medias/background-profil.png')} style={profilStyles.fond}>
    <View style={profilStyles.view}>


      <View style={profilStyles.infos}>
        <View style={profilStyles.account}>
          <Image style={profilStyles.pdp} source={require('../../medias/pdp.png')}/>
          <Image style={profilStyles.edit} source={require('../../medias/edit.png')}/> 
        </View>
        <Text style={profilStyles.donnees}>Pseudo :leromeipsum</Text>
        <Text style={profilStyles.donnees}>Mail : Lorem Ipsum</Text>
        <Text style={profilStyles.donnees}>Âge : 21 ans</Text>
        <Button title="Déconnexion" onPress={handleLogout} color="#e63946" />

      </View>

    </View>
  </ImageBackground>
  );
};

const profilStyles = StyleSheet.create({
  fond: {
      height: '950',
      marginTop: 0,
      // width: '100%',    
  },
  titre: {
      // fontSize: 30,
      // fontWeight: 'bold',
      // color: 'white',
      // marginTop: 80,
      // marginBottom: 20,
  },
  account: {
      justifyContent: 'center',
      flexDirection: 'row'
  },
  view:{
      alignItems: 'center',
      // backgroundColor: '#01147C',
  },
  infos: {
      borderRadius: 50,
      width:390,
      height: 400,
      alignItems:'center',
      marginBottom: 200,
      marginTop: 250,
  },
  tinyLogo: {
    marginTop: 20,
    height: 60,
    width: 170,
  },
  donnees: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  pdp: {
    width: 130,
    height: 130,
    top:-90,
    left: 30,
  },
  edit: {
    width: 30,
    height: 30,
    zIndex: 2,
    left:5,
    top:5,
  }
});

export default Profil;
