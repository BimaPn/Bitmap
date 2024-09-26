import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import { icons } from '../constants'

const EditProfileButton = () => {
  return (
    <TouchableOpacity
    onPress={() => router.push(`/profile/edit`)}
    className='w-36 items-center bg-semiLight py-3 rounded-2xl' 
    > 
      <View className='flex-row items-center space-x-[5px]'> 
        <Image 
        source={icons.edit_light} 
        className='w-[18px] h-[18px]'
        resizeMode='contain'
        tintColor={`#000000`} 
        />
        <Text 
        className='font-pmedium text-center text-base' 
        > 
        Edit profile 
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default EditProfileButton
