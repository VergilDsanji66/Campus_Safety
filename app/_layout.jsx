import { Stack } from "expo-router";

export default function RootLayout () {
  return (
    <Stack>
      <Stack.Screen name="(Tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="ResourcesPage" options={{title: 'Resources', headerShown: true, presentation: 'card', headerBackTitle: 'Back'}} />
    </Stack>
  );
}