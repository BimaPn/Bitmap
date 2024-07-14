import { router } from 'expo-router'
import { Image, TouchableOpacity } from 'react-native'
import { icons } from '../constants'

const BackButton = () => {
  const redirect = () => {
    router.back()
  }
  return (
    <TouchableOpacity className='px-3 items-center justify-center -mt-[2px]' onPress={redirect}>
      <Image 
      source={icons.left_dark} 
      className='w-5 h-5'
      resizeMode='contain'
      />
    </TouchableOpacity>
  )
}

export default BackButton
