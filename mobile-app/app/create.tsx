import { Stack } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  return (
    <Stack> 
      <Stack.Screen name='createPost' />
    </Stack>
  )
}

export default Create
