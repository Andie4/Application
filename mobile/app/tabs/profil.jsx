import { Text, View, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image, ImageBackground, } from 'expo-image';
import useAuthStore from "../../store/authStore";
import { router } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";



const Profil = () => {
  // fonction de déconnexion (dans le store)
  const logout = useAuthStore((state) => state.logout);
  // pour récupérer les infos utilisateur
  const user = useAuthStore((state) => state.user); 

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
          <Image style={profilStyles.pdp} source={require('../../medias/pdpUser.jpg')}/>
        </View>
        <Text style={profilStyles.donnees}>Prénom :{user.first_name}</Text>
        <Text style={profilStyles.donnees}>Mail : {user.email}</Text>
        <Text style={profilStyles.donnees}>Âge : {user.age}</Text>
        <TouchableOpacity style={profilStyles.logOut} onPress={handleLogout}>
          <Text style={profilStyles.textLogOut}>Déconnexion </Text>
        </TouchableOpacity>

        {/* <Ionicons name="logout"/> */}

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
  logOut: {
    padding: "auto",
    borderWidth: 2,
    borderColor: "#e63946",
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: "#e63946",
    marginTop: 50,
    width: 125,
    height: 50, 
    display: 'flex',
    justifyContent : 'center',
  },
  textLogOut :{
    fontSize: 25,
    color: "white",
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
    borderRadius: 65,
  },
  edit: {
    width: 30,
    height: 30,
    zIndex: 2,
    left:5,
    top:5,
  },
  
});

export default Profil;
