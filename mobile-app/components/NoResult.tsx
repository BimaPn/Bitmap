import { View, Text, Image } from 'react-native'
import { images } from '../constants'

const NoResult = () => {
  return (
    <View className='items-center pt-10 pb-14'>
      <Image source={images.noResult} className='w-36 h-36' resizeMode='contain' />
      <View className='gap-[2px] mt-[2px]'>
        <Text className='text-center font-pmedium text-base'>No results found</Text>
        <Text className='text-center text-gray-600'>We couldn't find what you're looking for</Text>
      </View>
    </View>
  )
}

export default NoResult
