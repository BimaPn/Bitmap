import { Stack } from 'expo-router'

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
