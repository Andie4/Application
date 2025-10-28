import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api'; 

const App = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      return Alert.alert("Erreur", "Tous les champs sont obligatoires");
    }
    if (password !== confirmPassword) {
      return Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
    }

    try {
      const response = await api.post("/user/signup", {
        email,
        password,
        age,
      });
      Alert.alert("Succès", "Compte créé !");
    } catch (error) {
      Alert.alert("Erreur", "Un problème est survenu lors de l’inscription");
    }
  };

  return (
    <ImageBackground source={require('../medias/background-connection2.png')} resizeMode="stretch" style={styles.image}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <View style={styles.conn}>
            <Text style={styles.titre}>Inscription</Text>

            <View style={styles.groupe}>
              <Text style={styles.label}>E-mail :</Text>
              <TextInput placeholder="Votre email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address"/>
            </View>

            <View style={styles.groupe}>
              <Text style={styles.label}>Âge :</Text>
              <TextInput placeholder="Votre âge" style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric"/>
            </View>

            <View style={styles.groupe}>
              <Text style={styles.label}>Mot de passe :</Text>
              <TextInput placeholder="Votre mot de passe" style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
            </View>

            <View style={styles.groupe}>
              <Text style={styles.label}>Confirmation du mot de passe :</Text>
              <TextInput placeholder="Confirmez votre mot de passe" style={styles.input} secureTextEntry  value={confirmPassword}  onChangeText={setConfirmPassword}/>
            </View>

            <View style={{ marginTop: 50 }}>
              <Button title="Valider" color="#1e3a8a" onPress={handleSignup} />
            </View>

            <Link href="home" style={{ marginTop: 20, color: 'white' }}>
              Vous avez un compte ? Connexion
            </Link>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

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



