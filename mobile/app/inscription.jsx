import { Link } from 'expo-router';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const App = () => (
  <ImageBackground source={require('../medias/background-connection2.png')} resizeMode="stretch" style={styles.image}>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.conn}>
          <Text style={styles.titre}>Inscription</Text>

          <View style={styles.groupe}>
            <Text style={styles.label}>E-mail :</Text>
            <TextInput placeholder="Votre email" style={styles.input}/>
          </View>

          <View style={styles.groupe}>
            <Text style={styles.label}>Âge :</Text>
            <TextInput placeholder="Votre âge" secureTextEntry style={styles.input}/>
          </View>
          <View style={styles.groupe}>
            <Text style={styles.label}>Mot de passe :</Text>
            <TextInput placeholder="Votre mot de passe" secureTextEntry style={styles.input}/>
          </View>

          <View style={styles.groupe}>
            <Text style={styles.label}>Confirmation du mot de passe :</Text>
            <TextInput placeholder="Votre mot de passe" secureTextEntry style={styles.input}/>
          </View>

            <Button title="valider" style={styles.valid}></Button>
            
            <Link href="profil" style={{flex: 1, alignItems: "center"}}>Profil</Link>
            <Link href="home" style={{flex: 1, alignItems: "center"}}>Accueil</Link>    

            <Link href="home" style={{flex: 1, alignItems: "center", marginTop: 20, color: 'white'}}>Vous avez un compte ?  Connexion</Link>
        </View>
 


      </SafeAreaView>
    </SafeAreaProvider>
  </ImageBackground>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  conn: {
    zIndex: 2,
    backgroundColor: '#01147C',
    paddingBottom: 100,
    marginTop: 200,
    borderRadius: 40,
    width: '100%',
    height: 620,
    alignItems: 'center'
    
  },
  titre:{
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 20,

  }, 
  label: {
    color: 'white'
  },
  groupe: {
    alignItems: 'flex-start',
    marginTop: 40
  },
  input: {
    backgroundColor: 'white'
  }
  ,
  image: {
    zIndex: -1,
    flex: 1,
    justifyContent: 'center',
    top: 0,
    width: '100%',
  },
  tinyLogo: {
    height: 60,
    width: 170,
    marginTop: 20,
    alignItems: 'center'
  },
  valid: {
    marginTop: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
  
});

export default App;



