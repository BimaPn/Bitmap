import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileMenu from '../../components/ProfileMenu'
import { icons, images } from '../../constants'
import UserContent from '../../components/user/UserContent'
import { router } from 'expo-router'

const ProfilePage = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white px-3'> 
        <View className='items-end'> 
          <ProfileMenu /> 
        </View>
        <UserInfo />
        <UserContent /> 
      </ScrollView>
    </SafeAreaView> 
  )
}

const UserInfo = () => { 
 return( 
 <> 
    <View className='items-center mb-3'> 
      <Image
      source={images.user}
      className='w-32 h-32 rounded-full'
      resizeMode='cover'
      />

      <View className='mt-4'>  
        <Text className='text-[22px] font-psemibold'>Emily Johnson</Text>
        <Text className='text-netral text-center text-[15px] -mt-[3px]'>@emily_43</Text>
      </View>

      <View className='pt-2'> 
        <Text className='text-base text-center'>
        Influencers and content creators can leverage Ahrefs’ Social Media Bio Generator to 
        </Text>
      </View>

      <View className='w-full flex-row items-center justify-evenly mt-4 mb-4'> 
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>8</Text>
          <Text className='text-netral text-sm'>Media</Text>
        </View>

        <TouchableOpacity
        onPress={() => router.push(`/users/udin/followers`)} 
        className='w-[25%] items-center' 
        > 
          <Text className='text-xl font-psemibold'>506k</Text>
          <Text className='text-netral text-sm'>Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity  
        onPress={() => router.push(`/users/udin/following`)} 
        className='w-[25%] items-center' 
        > 
          <Text className='text-xl font-psemibold'>271</Text>
          <Text className='text-netral text-sm'>Following</Text>
        </TouchableOpacity>
      </View> 
      
      <View className='w-full flex-row items-center justify-center space-x-2'>

        <TouchableOpacity 
        onPress={() => router.push(`/profile/edit`)}
        className='w-[42%] items-center bg-semiLight py-3 rounded-2xl' 
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

        <TouchableOpacity className='p-[10px] rounded-xl border border-gray-300'> 
          <Image source={icons.more_dark} className='w-6 h-6' resizeMode='contain' />
        </TouchableOpacity>
      </View>


    </View>
 </>
 )
}

export default ProfilePage
