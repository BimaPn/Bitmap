import { Stack } from 'expo-router'
import CommonRoutesProvider from '../../../../components/providers/CommonRoutesProvider'

const HomeLayout = () => {
  return (
  <CommonRoutesProvider layout="(home)" initialRouteName='trending'> 
    <Stack.Screen name='trending' options={{headerShown:false}} />
    <Stack.Screen name='following' options={{headerShown:false}} />
  </CommonRoutesProvider>
  )
}

export default HomeLayout
