import { Redirect, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

const AuthLayout = () => {
  const { isAuthenticated } = useSelector((state : any) => state.auth);

  if(isAuthenticated) {
    return <Redirect href={`/trending`} />
  }

  return (
      <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  )
}

export default AuthLayout
