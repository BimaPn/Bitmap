import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import UserContent from '../../../../../../components/user/UserContent'
import { icons, images } from '../../../../../../constants'
import BackButton from '../../../../../../components/BackButton'
import Logout from '../../../../../../components/Logout'
import ProfileMenu from '../../../../../../components/ProfileMenu'
import { useEffect, useState } from 'react'
import ApiClient from '../../../../../../api/axios/ApiClient'
import { useCommonRoutes } from '../../../../../../components/providers/CommonRoutesProvider'
import { UserInfoProps, UserStatisticProps } from '../../../../../../types/auth'
import LoadingSpinner from '../../../../../../components/LoadingSpinner'
import FollowButton from '../../../../../../components/FollowButton'

const UserProfileDetailPage = () => {
  const { username } = useLocalSearchParams();
  return (
    <SafeAreaView> 
      <ScrollView stickyHeaderIndices={[0]} className='h-full bg-white'> 

        <View className='flex-row justify-between items-center px-3'> 
          <BackButton />
          <Logout> 
            <ProfileMenu /> 
          </Logout>
        </View> 

        <View className='px-3 pt-3'>
          <UserInfo username={username as string} />
          <UserContent username={username as string} />
        </View>

      </ScrollView>
    </SafeAreaView> 
  )
}

const UserInfo = ({username}:{username:string}) => { 
  const [user, setuser] = useState<UserInfoProps | null>(null)

  useEffect(() => {
    const getUserInfo = async () => {
      ApiClient().get(`/api/users/${username}`)
      .then((res) => {
        const result = res.data.user
        setuser(result)
      })
      .catch((err) => {
        console.log(err.response)
        router.back()
      })
    }
    getUserInfo()
  },[])

  if(!user) {
    return <LoadingSpinner />
  }

 return user && ( 
 <> 
    <View className='items-center mb-3'> 
      <Image
      source={user.avatar ? { uri: user.avatar } : images.user}
      className='w-32 h-32 rounded-full'
      resizeMode='cover'
      />

      <View className='mt-4'>  
        <Text className='text-[22px] font-psemibold'>{user.name}</Text>
        <Text className='text-netral text-center text-[15px] -mt-[3px]'>@{user.username}</Text>
      </View>

      <View className='pt-2'> 
        <Text className='text-base text-center'>
        {user.bio}
        </Text>
      </View>

      <UserStatistic statistic={user.statistic} username={user.username} />
      
      <View className='w-full flex-row items-center justify-center space-x-2'>
        <FollowButton isFollowing={user.isFollowing} username={user.username} width={108} height={48} />
        <TouchableOpacity className='p-[10px] rounded-xl border border-gray-300'> 
          <Image source={icons.more_dark} className='w-6 h-6' resizeMode='contain' />
        </TouchableOpacity>
      </View>

    </View>
 </>
 )
}

const UserStatistic = ({ statistic, username }: { statistic: UserStatisticProps, username: string }) => {
  const { layoutPath } = useCommonRoutes()
  return (
    <View className='w-full flex-row items-center justify-evenly mt-4 mb-4'> 
      <View className='w-[25%] items-center'> 
        <Text className='text-xl font-psemibold'>{statistic.posts}</Text>
        <Text className='text-netral text-sm'>Posts</Text>
      </View>

      <TouchableOpacity
      onPress={() => router.push(`/${layoutPath}/users/${username}/followers`)} 
      className='w-[25%] items-center' 
      > 
        <Text className='text-xl font-psemibold'>{statistic.followers}</Text>
        <Text className='text-netral text-sm'>Followers</Text>
      </TouchableOpacity>

      <TouchableOpacity  
      onPress={() => router.push(`/${layoutPath}/users/${username}/following`)} 
      className='w-[25%] items-center' 
      > 
        <Text className='text-xl font-psemibold'>{statistic.followings}</Text>
        <Text className='text-netral text-sm'>Following</Text>
      </TouchableOpacity>
    </View> 
  )
}

export default UserProfileDetailPage
