import { Stack } from "expo-router";
import useAuthStore from "../store/authStore";

export default function RootLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? <Stack.Screen name="index" /> : null}
      {!isLoggedIn ? <Stack.Screen name="inscription" /> : null}
    </Stack>
  );
}
