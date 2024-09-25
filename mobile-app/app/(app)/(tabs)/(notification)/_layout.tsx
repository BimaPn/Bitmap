import { Stack } from "expo-router"
import CommonRoutesProvider from "../../../../components/providers/CommonRoutesProvider"

const NotificationLayout = () => {
  return (
  <CommonRoutesProvider layout="(notification)" initialRouteName='index'> 
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </CommonRoutesProvider>
  )
}

export default NotificationLayout
