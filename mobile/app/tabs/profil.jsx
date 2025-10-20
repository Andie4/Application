import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from 'expo-image';
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
    <View style={profilStyles.view}>
      <Image style={profilStyles.tinyLogo} source={require('../../medias/white-disney.png')}/>

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
  );
};

const profilStyles = StyleSheet.create({
  account: {
      justifyContent: 'center',
      flexDirection: 'row'
  },
  view:{
      alignItems: 'center',
      backgroundColor: '#01147C',
  },
  infos: {
      borderRadius: 50,
      backgroundColor: 'white',
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
  donnees: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  pdp: {
    width: 100,
    height: 100,
    top:-55,
    left: 20,
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
