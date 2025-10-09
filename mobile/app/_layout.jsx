import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";
import useAuthStore from "../store/authStore";

export default function RootLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Stack>
    <Stack.Screen name="index" options={{title: 'connexion', headerShown: false}}/>
    <Stack.Screen name="inscription" options={{title: 'inscription', headerShown: false}}/>
    <Stack.Screen name="home" options={{title: 'Accueil' ,headerShown: false}}/>
    <Stack.Screen name="profil" options={{title: 'Profil',headerShown: false}}/>
    <Stack.Screen name="marvel" options={{title: 'marvel',headerShown: false}}/>
    {/* <Stack.Screen name="profil" options={{title: 'Profil'}}/> */}
</Stack>);
}
