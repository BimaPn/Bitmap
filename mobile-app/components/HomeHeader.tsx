import { router, usePathname } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

const HomeHeader = () => { 
  return ( 
    <View className='flex-row space-x-5'> 
      <TouchableOpacity 
      onPress={() => router.push("/home/trending")} 
      className="relative font-pmedium text-base"  
      > 
        <Text className="font-pmedium text-[15px]">Trending</Text>
        {usePathname() === "/home/trending" && ( 
          <BottomBorder />
        )}
      </TouchableOpacity>

      <TouchableOpacity 
      className="relative" 
      onPress={() => router.push("/home/following")}
      > 
        <Text className="font-pmedium text-[15px]">Following</Text>
        {usePathname() === "/home/following" && ( 
          <BottomBorder />
        )}
      </TouchableOpacity>
    </View>   
  )
}

const BottomBorder = () => { 
  return ( 
    <View className="absolute -bottom-1 left-0 right-0 items-center"> 
      <View className="w-[25px] h-[3px] rounded-full bg-black" />
    </View>
  )
}

export default HomeHeader
