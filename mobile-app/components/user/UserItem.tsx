import { View, Text, TouchableOpacity, Image } from 'react-native'
import { images } from '../../constants'
import { router } from 'expo-router'

const UserItem = ({containerStyles}:{containerStyles?: string}) => {
  return (
    <View className={`flex-row justify-between items-center ${containerStyles}`}>
      <TouchableOpacity 
      onPress={() => router.push(`/users/udin`)}
      className='flex-row items-center space-x-3' 
      > 
        <Image 
        source={images.user} 
        className='w-14 h-14 rounded-full' resizeMode='cover'  
        />
        <View> 
        <Text numberOfLines={1} className='font-pmedium text-base'>Udin Sarwendah</Text>
        <Text className='text-netral'>@udah22</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className='w-20 h-11 items-center justify-center bg-semiLight rounded-xl'> 
        <Text className='text-center font-pmedium'>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserItem
