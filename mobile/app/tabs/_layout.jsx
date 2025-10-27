import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarStyle: { backgroundColor: "#01147C", borderTopColor: "black", height: 60 }, tabBarActiveTintColor: "white",tabBarInactiveTintColor: "gray",
      }}>

      <Tabs.Screen name="home" options={{ title: "Accueil",headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }}/>

      <Tabs.Screen name="marvel" options={{ title: "Marvel",headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} /> }}/>

      <Tabs.Screen name="profil" options={{ title: "Profil", headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} /> }}/>
    </Tabs>
  );
}
