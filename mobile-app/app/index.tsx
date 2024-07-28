import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { icons, images } from "../constants";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-black w-full h-full relative">
      <View className="w-full h-[55%] px-3"> 
        <Image source={images.background_home} className="w-full h-full border border-white" resizeMode="cover" />
      </View>

      <ScrollView className="w-full absolute top-[48%] left-0 right-0 px-3"> 
        <View className="items-center"> 
          <View className="w-[70px] h-[70px] rounded-full items-center justify-center bg-white mb-6"> 
            <Image 
            className="w-[60%] h-[60%]"   
            source={images.logoSmall}
            resizeMode="contain"
            />
          </View>

          <View className="space-y-3 mb-10"> 
            <Text className="text-white font-psemibold text-center text-2xl"> 
              Discover thousands of {'\n'} Photos for your inspiration
            </Text>
            <Text className="text-center text-gray-300 leading-[22px]"> 
            Share your passions, explore new ideas, and connect with amazing creators. Let’s get started.
            </Text>
          </View>

          <PrimaryButton 
          title="Continue with email"  
          textStyles="!text-black" 
          handlePress={() => router.push("/login")}
          iconStart={ 
            <Image source={icons.email} className="w-[24px] h-[24px] ml-6 -mt-[2px]" resizeMode="contain" /> 
          }
          containerStyles="w-full !bg-white" 
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#000000" style="light" />
        
    </SafeAreaView>
  );
};

export default Welcome;
