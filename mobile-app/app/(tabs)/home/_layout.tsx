import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const HomeLayout = () => {
  return (
  <> 
    <Stack initialRouteName='trending'> 
      <Stack.Screen name='trending' options={{headerShown:false}} />
      <Stack.Screen name='following' options={{headerShown:false}} />
    </Stack>
    <StatusBar backgroundColor="#FFFFFF" style="dark" />
  </>

  )
}

export default HomeLayout
