import { Text, TouchableOpacity, View } from "react-native"

const HomeHeader = () => { 
  return ( 
    <View className='flex-row space-x-5'> 

      <TouchableOpacity className="relative font-pmedium text-base"> 
        <Text className="font-pmedium text-[15px]">Trending</Text>

        <View className="absolute -bottom-1 left-0 right-0 items-center"> 
          <View className="w-[25px] h-[3px] rounded-full bg-black" />
        </View>

      </TouchableOpacity>

      <TouchableOpacity className="relative"> 
        <Text className="font-pmedium text-[15px]">Following</Text>

      </TouchableOpacity>
    </View>   
  )
}

export default HomeHeader
