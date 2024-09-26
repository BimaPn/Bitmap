import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { icons } from '../../constants'

const ShareButton = () => {
  return (
    <TouchableOpacity
    activeOpacity={.8}
    >
    <Image 
    source={icons.share_dots}
    className='w-[22px] h-[22px]'
    resizeMode='contain'
    />
    </TouchableOpacity>
  )
}

export default ShareButton
