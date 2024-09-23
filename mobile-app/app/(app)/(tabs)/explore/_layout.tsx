import { Stack } from "expo-router"

const ExploreLayout = () => {
  return (
     <Stack screenOptions={{ contentStyle:{ backgroundColor: "#FFFFFF" } }} initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      </Stack>
  )
}

export default ExploreLayout
