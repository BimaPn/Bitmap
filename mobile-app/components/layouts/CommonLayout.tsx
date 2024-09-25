import { Stack } from "expo-router"
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types"

const CommonLayout = ({children, ...props}:NativeStackNavigatorProps & {children: React.ReactNode}) => {
  return (
     <Stack {...props}>
        <Stack.Screen 
        name="users/[username]/index" 
        options={{ 
        headerShown: false,
        }}
        />
        <Stack.Screen 
        name="users/[username]/following" 
        options={{ 
        headerShown: false,
        }}
        />
        <Stack.Screen 
        name="users/[username]/followers" 
        options={{ 
        headerShown: false,
        }}
        />
        {children}
      </Stack>
  )
}

export default CommonLayout
