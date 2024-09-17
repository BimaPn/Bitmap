import { Redirect, Stack } from "expo-router"
import { useSelector } from "react-redux";

const LoggedUserLayout = () => {
  const { isAuthenticated } = useSelector((state : any) => state.auth);

  if(!isAuthenticated) {
    return <Redirect href={`/login`} />
  }
  return (
     <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle:{backgroundColor: "#FFFFFF"} }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
        <Stack.Screen name="posts/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="categories/[slug]" options={{ headerShown: false }} />

        <Stack.Screen 
        name="categories/index" 
        options={{ 
        headerShown: false,
        }}
        />
        <Stack.Screen 
        name="profile/edit" 
        options={{ 
        headerShown: false,
        }}
        />
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
        <Stack.Screen 
        name="create/post" 
        options={{ 
        headerShown: false,
        }}
        />

        <Stack.Screen name="modals/create" options={{ headerShown:false, presentation:"transparentModal" }} />

      </Stack>
  )
}

export default LoggedUserLayout
