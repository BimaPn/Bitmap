import { Stack } from "expo-router"
import CommonRoutesProvider from "../../../../components/providers/CommonRoutesProvider"

const ProfileLayout = () => {
  return (
  <CommonRoutesProvider layout="(profile)"> 
    <Stack.Screen name="null" options={{ headerShown: false }} />
  </CommonRoutesProvider>
  )
}

export default ProfileLayout
