import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";
import { Redirect, SplashScreen, Stack, usePathname } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store/store";
import Toast from 'react-native-toast-message';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <> 
    <Provider store={store}>
      <Content /> 
    </Provider>
    
    <Toast />
    </>

  );
};

const authPages = ['/','/login','/register']

const Content = () => {
  const { auth } = useSelector((state : any) => state.auth);
  const path = usePathname()

  useEffect(() => {
    if(auth && authPages.includes(path)) {
      redirectPage()
    }
    console.log(path)
  }, [auth, path])

  const redirectPage = () => <Redirect href={`/home/trending`} />

  if(!auth) {
    return ( 
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    )
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
      </Stack>
  )
}

export default RootLayout;
