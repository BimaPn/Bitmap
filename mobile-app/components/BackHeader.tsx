import { Text, View } from "react-native"
import BackButton from "./BackButton"

const BackHeader = ({title}:{title: string}) => {
  return ( 
    <View className='flex-row justify-between items-center py-4 bg-white px-1'> 
      <View className='w-1/3 flex-row justify-start'> 
        <BackButton />
      </View>
      <View className='w-1/3'> 
        <Text className='text-center font-pmedium text-base'>{title}</Text>
      </View>
      <View className='w-1/3'/> 
    </View>
  )
}

export default BackHeader
