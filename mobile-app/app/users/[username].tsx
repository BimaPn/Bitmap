import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ProfileMenu from '../../components/ProfileMenu'
import { icons, images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserContent from '../../components/user/UserContent'
import BackButton from '../../components/BackButton'

const UserProfileDetailPage = () => {
  return (
    <SafeAreaView> 
      <ScrollView stickyHeaderIndices={[0]} className='h-full bg-white'> 

        <Header />

        <View className='px-3 pt-3'>
          <UserInfo />
          <UserContent />
        </View>

      </ScrollView>
    </SafeAreaView> 
  )
}

const Header = () => {
  return ( 
    <View className='flex-row justify-between items-center py-4 bg-white px-1'> 
      <View className='w-1/3 flex-row justify-start'> 
        <BackButton />
      </View>
      <View className='w-1/3'> 
        <Text className='text-center font-pmedium text-base'>User's profile</Text>
      </View>
      <View className='w-1/3'/> 
    </View>
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
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>506k</Text>
          <Text className='text-netral text-sm'>Followers</Text>
        </View>
        <View className='w-[25%] items-center'> 
          <Text className='text-xl font-psemibold'>271</Text>
          <Text className='text-netral text-sm'>Following</Text>
        </View>
      </View> 
      
      <View className='w-full flex-row items-center justify-center space-x-2'>
        <TouchableOpacity className='w-[45%] bg-black py-3 rounded-2xl'> 
          <Text className='text-white font-pmedium text-center text-base'>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-[10px] rounded-xl border border-gray-300'> 
          <Image source={icons.more_dark} className='w-6 h-6' resizeMode='contain' />
        </TouchableOpacity>
      </View>



    </View>
 </>
 )
}

export default UserProfileDetailPage

