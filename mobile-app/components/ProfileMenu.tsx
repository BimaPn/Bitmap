import { View, Text, Image } from 'react-native'
import { icons } from '../constants'

const ProfileMenu = () => {
  return (
    <View>
      <View className='py-3'> 
        <Image 
        source={icons.menu} 
        className='w-[26px] h-[26px]'  
        resizeMode='contain' 
        />
      </View>

    </View>
  )
}

export default ProfileMenu 
