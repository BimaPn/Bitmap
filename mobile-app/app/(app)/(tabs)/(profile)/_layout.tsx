import { Stack } from "expo-router"
import CommonRoutesProvider from "../../../../components/providers/CommonRoutesProvider"

const ProfileLayout = () => {
  return (
  <CommonRoutesProvider layout="(profile)" initialRouteName='profile'> 
    <Stack.Screen name="profile" options={{ headerShown: false }} />
  </CommonRoutesProvider>
  )
}

export default ProfileLayout
