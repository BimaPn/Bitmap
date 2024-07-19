import { View, Text, TouchableOpacity } from 'react-native'

const FollowButton = () => {
  return (
    <TouchableOpacity className='px-5 h-11 justify-center bg-gray-200 rounded-xl'> 
      <Text className='font-pmedium'>Follow</Text>
    </TouchableOpacity>
  )
}

export default FollowButton
