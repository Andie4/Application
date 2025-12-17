import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, Alert, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api'; 

const App = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [first_name, setFirst_name] = useState('');
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
        first_name,
      });
      Alert.alert("Succès", "Compte créé !");
    } catch (error) {
      Alert.alert("Erreur", "Un problème est survenu lors de l’inscription");
    }
  };

  return (
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <View style={styles.conn}>
            <Text style={styles.titre}>Inscription</Text>

            <View style={styles.groupe}>
              <Text style={styles.label}>E-mail :</Text>
              <TextInput placeholder="Votre email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address"/>
            </View>

            <View style={styles.groupe}>
              <Text style={styles.label}>Votre prénom</Text>
              <TextInput placeholder="Votre prénom" style={styles.input} value={first_name} onChangeText={setFirst_name}/>
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

            <TouchableOpacity style={styles.test}>
              <Text title="Valider" style={styles.validation} onPress={handleSignup}>Valider</Text>
            </TouchableOpacity>

            <Link href="/" style={{ marginTop: 20, color: 'white' }}>
              Vous avez un compte ? 
              <Text style={styles.lien}> Connexion</Text>
            </Link>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  conn: {
    zIndex: 2,
    backgroundColor: '#01147C',
    borderRadius: 40,
    width: '100%',
    height: "100%",
    alignItems: 'center',
    top: 0,
    
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
    backgroundColor: '#38458E',
    width: 250,
    height: 40 ,
    borderRadius: 10,
    marginTop: 5,
    padding: 10
  },
  tinyLogo: {
    height: 60,
    width: 170,
    marginTop: 20,
    alignItems: 'center'
  },
  test :{
    backgroundColor: '#01147C',
    borderRadius: 10,
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 2,
    width: 150,
    height: 50, 
    display: 'flex',
    justifyContent : 'center',
    color: 'white'
  },
  validation : {
    // ne fonctionne pas la couleur du title ne change pas 
    color: 'white',
    // borderWidth: 2,
    fontSize: 20,
    // backgroundColor: "#e63946",
    width: "100%",
    textAlign: 'center',
  },
  lien : {
    textDecorationLine: 'underline'
  }
  
});

export default App;



