import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="index" options={{title:'index'}}/>
    <Stack.Screen name="home/index" options={{title:'home'}}/>
     <Stack.Screen name="home/image" options={{title:'image',presentation:'transparentModal',animation:'fade'}}/>
    </Stack>
  )
}
