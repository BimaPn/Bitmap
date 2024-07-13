import { router, usePathname } from "expo-router"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

const HomeHeader = () => { 
  const [pathActive, setPathActive] = useState<"trending"|"following">("trending")
  const path = usePathname()
  useEffect(() => {
    if(path.includes("/home/trending")) {
      setPathActive("trending")
    }
    if(path.includes("/home/following")) {
      setPathActive("following")
    }
  },[path])
  return ( 
    <View className='flex-row space-x-5'> 
      <TouchableOpacity 
      onPress={() => router.push("/home/trending")} 
      className="relative font-pmedium text-base"  
      > 
        <Text className="font-pmedium text-[15px]">Trending</Text>
        {pathActive === "trending" && ( 
          <BottomBorder />
        )}
      </TouchableOpacity>

      <TouchableOpacity 
      className="relative" 
      onPress={() => router.push("/home/following")}
      > 
        <Text className="font-pmedium text-[15px]">Following</Text>
        {pathActive === "following" && ( 
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
