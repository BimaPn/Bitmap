import { Stack } from "expo-router"
import CommonRoutesProvider from "../../../../components/providers/CommonRoutesProvider"

const ProfileLayout = () => {
  return (
  <CommonRoutesProvider layout="(profile)" initialRouteName='profile'> 
  </CommonRoutesProvider>
  )
}

export default ProfileLayout
