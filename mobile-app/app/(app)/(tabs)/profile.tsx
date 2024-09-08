import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileMenu from '../../../components/ProfileMenu'
import UserContent from '../../../components/user/UserContent'
import { router } from 'expo-router'
import { icons, images } from '../../../constants'
import Logout from '../../../components/Logout'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
  return (
    <SafeAreaView> 
      <ScrollView className='h-full bg-white px-3'> 
        <View className='items-end'> 
          <Logout> 
            <ProfileMenu /> 
          </Logout>
        </View>
        <UserInfo />
        <UserContent /> 
      </ScrollView>
    </SafeAreaView> 
  )
}

const UserInfo = () => { 
  const { user } = useSelector((state : any) => state.auth);

 return user && ( 
 <> 
    <View className='items-center mb-3'> 
      <Image
      source={user.avatar ? { uri: user.avatar } : images.user}
      className='w-32 h-32 rounded-full'
      resizeMode='cover'
      />

      <View className='mt-4'>  
        <Text className='text-[22px] font-psemibold'>{ user.name }</Text>
        <Text className='text-netral text-center text-[15px] -mt-[3px]'>@{user.username}</Text>
      </View>

      {user.bio && (
        <View className='pt-2'> 
          <Text className='text-base text-center'>
            { user.bio } 
          </Text>
        </View>
      )}

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
      </View>

    </View>
 </>
 )
}

export default ProfilePage
