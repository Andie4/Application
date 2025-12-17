import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View,TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../store/authStore";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Zustand
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://172.20.10.2:3000/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.ok) {
        // Sauvegarde dans Zustand
        setUser(data.data);
        setToken(data.token);
        setIsLoggedIn(true);

        Alert.alert("Connexion réussie", `Bienvenue ${data.data.first_name}`);
        console.log("Token JWT:", data.token);

        // Redirection vers la page home
        router.push("tabs/home");
      } else {
        Alert.alert("Erreur", data.message || "Email ou mot de passe invalide");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de se connecter au serveur");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <Image  source={require('../medias/background-connection2.png')}  style={styles.image}></Image>
          <View style={styles.conn}>
            <Text style={styles.titre}>Connexion</Text>

            <View style={styles.groupe}>
              <Text style={styles.label}>E-mail :</Text>
              <TextInput
                placeholder="Votre email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.groupe}>
              <Text style={styles.label}>Mot de passe :</Text>
              <TextInput
                placeholder="Votre mot de passe"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <Link href="inscription" style={{ alignItems: "center", marginTop: 20, color: 'white' }}>Vous n'avez pas de compte ? 
              <Text style={styles.lien}> Inscription</Text> 
            </Link>
            
            <View style={styles.test}>  
              <Button title="Valider" onPress={handleLogin} style={styles.validation} />
            </View>

          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </TouchableWithoutFeedback> 
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center' },
  conn: {
    // zIndex: 2,
    backgroundColor: '#01147C',
    borderRadius: 40,
    width: '100%',
    height: 700,
    alignItems: 'center',
    top: -20,
    borderWidth: 2,
    // borderColor: 'white',
  },
  titre: { 
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: 30, 
    marginTop: 20 
  },
  label: { 
    color: 'white' 
  },
  groupe: { 
    alignItems: 'flex-start', 
    marginTop: 40 
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    padding: 8,
    borderRadius: 5,
    marginTop: 5
  },
  image: { 
    justifyContent: 'center',
    top: 0,
    width: '100%',
    height: 250,
    marginBottom: -15,
  },
  lien : {
    textDecorationLine: 'underline',
    marginBottom: 0,
    borderWidth: 2,
    borderColor: 'red',
    width: '100%',
    height:20,

  },
  validation : {
    color: 'white',
    backgroundColor: 'red',
    marginTop: 40,
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
  },
});

export default App;
// touchableWithoutfeedback onpress keybaord .dimiss à ajouter sur les pages avec l'utilisation du clavier 