import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Welcome = () => {

  return (
    <SafeAreaView className="bg-white h-full">
      <Text>Fuck you bitch</Text> 
      <View>
      <TouchableOpacity 

      > 
      Continue with email
      </TouchableOpacity>
      </View> 
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
