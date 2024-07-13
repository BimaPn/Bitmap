import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack initialRouteName='trending'> 
      <Stack.Screen name='trending' options={{headerShown:false}} />
      <Stack.Screen name='following' options={{headerShown:false}} />
    </Stack>
  )
}

export default HomeLayout
