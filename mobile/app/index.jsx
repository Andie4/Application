import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
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
      const response = await fetch("http://192.168.1.116:56806/user/signin", {
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
    
    <ImageBackground source={require('../medias/background-connection2.png')} resizeMode="stretch" style={styles.image}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
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

            <Link href="inscription" style={{ flex: 1, alignItems: "center", marginTop: 20, color: 'white' }}>Vous n'avez pas de compte ? Inscription</Link>

            <Button title="Valider" onPress={handleLogin} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center' },
  conn: {
    zIndex: 2,
    backgroundColor: '#01147C',
    paddingBottom: 100,
    marginTop: 250,
    borderRadius: 40,
    width: '100%',
    height: 650,
    alignItems: 'center'
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
    flex: 1, 
    justifyContent: 'center',
    width: '100%',
    height: 300,
  top: 0,
  },
});

export default App;
