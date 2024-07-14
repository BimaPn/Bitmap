import { router, Stack } from 'expo-router'
import { View, Text } from 'react-native'

const CreateLayout = () => {
  return (
    <Stack> 
      <Stack.Screen 
      name='index' 
      options={{ headerShown: false }}
      />
    </Stack>
  )
}

export default CreateLayout
