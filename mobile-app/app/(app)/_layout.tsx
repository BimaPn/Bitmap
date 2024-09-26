import { Redirect, Stack } from "expo-router"
import { useSelector } from "react-redux";
import DetailPostProvider from "../../components/providers/DetailPostProvider";
import CategoryProvider from "../../components/providers/CategoryProvider";

const LoggedUserLayout = () => {
  const { isAuthenticated } = useSelector((state : any) => state.auth);

  if(!isAuthenticated) {
    return <Redirect href={`/login`} />
  }
  return (
  <DetailPostProvider>
    <CategoryProvider> 

     <Stack>
        <Stack.Screen
        name="(tabs)" 
        options={{ headerShown: false, contentStyle:{backgroundColor: "#FFFFFF"} }} />
        <Stack.Screen name="posts/[id]" options={{ headerShown: false }} />

        <Stack.Screen 
        name="categories/[slug]" 
        options={{ headerShown: false }} 
        />

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
        name="create/post" 
        options={{ 
        headerShown: false,
        }}
        />
        <Stack.Screen 
        name="create/collection" 
        options={{ headerShown:false, presentation:"transparentModal" }} 
        />

        <Stack.Screen 
        name="modals/create" 
        options={{ headerShown:false, presentation:"transparentModal" }} 
        />
      </Stack>
    </CategoryProvider>
  </DetailPostProvider>

  )
}

export default LoggedUserLayout
