import { Stack } from "expo-router"
import CommonRoutesProvider from "../../../../components/providers/CommonRoutesProvider"

const ExploreLayout = () => {
  return (
  <CommonRoutesProvider layout="(explore)" initialRouteName='index'> 
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
  </CommonRoutesProvider>
  )
}

export default ExploreLayout
