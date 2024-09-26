import { Text, View } from "react-native"
import BackButton from "./BackButton"

const BackHeader = ({title}:{title: string}) => {
  return ( 
    <View className='flex-row justify-between items-center py-4 bg-white px-1'> 
      <View className='w-10 flex-row justify-start'> 
        <BackButton />
      </View>
      <View className='flex-1'> 
        <Text className='text-center font-pmedium text-base'>{title}</Text>
      </View>
      <View className='w-10'/> 
    </View>
  )
}

export default BackHeader
