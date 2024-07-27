import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

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
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
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
    </Provider>
  );
};

export default RootLayout;
