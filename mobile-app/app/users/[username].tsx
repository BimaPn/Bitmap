import { Image, ScrollView, Text, View } from 'react-native'
import ProfileMenu from '../../components/ProfileMenu'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserContent from '../../components/user/UserContent'

const UserProfileDetailPage = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white px-3'> 
        <Header />
        <UserContent /> 
      </ScrollView>
    </SafeAreaView> 
  )
}

const Header = () => { 
 return( 
 <> 
    <View className='items-end'> 
      <ProfileMenu /> 
    </View>

    <View className='items-center'> 
      <Image
      source={images.user}
      className='w-32 h-32 rounded-full'
      resizeMode='cover'
      />

      <View className='mt-3'>  
        <Text className='text-[22px] font-psemibold'>Emily Johnson</Text>
        <Text className='text-netral text-center text-[15px] -mt-[3px]'>@emily_43</Text>
      </View>

      <View className='w-full flex-row items-center justify-evenly mt-5 mb-6'> 
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>8</Text>
          <Text className='text-netral text-sm'>Media</Text>
        </View>
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>506k</Text>
          <Text className='text-netral text-sm'>Followers</Text>
        </View>
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>271</Text>
          <Text className='text-netral text-sm'>Following</Text>
        </View>
      </View> 
    </View>
 </>
 )
}

export default UserProfileDetailPage

