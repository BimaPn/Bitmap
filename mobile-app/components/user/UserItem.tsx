import { View, Text, TouchableOpacity, Image } from 'react-native'
import { images } from '../../constants'
import { router } from 'expo-router'
import { useCommonRoutes } from '../providers/CommonRoutesProvider'
import { UserItemProps } from '../../types/auth'
import FollowButton from '../FollowButton'
import { useSelector } from 'react-redux'

const UserItem = ({containerStyles, ...props}:{containerStyles?: string} & UserItemProps) => {
  const { layoutPath } = useCommonRoutes()

  const { user } = useSelector((state : any) => state.auth);

  return (
    <View className={`flex-row justify-between items-center ${containerStyles}`}>
      <TouchableOpacity 
      activeOpacity={.8}
      onPress={() => router.push(`/${layoutPath}/users/${props.username}`)}
      className='flex-row items-center space-x-3' 
      > 
        <Image
        source={props.avatar ? { uri: props.avatar } : images.user}
        className='w-14 h-14 rounded-full'  
        resizeMode='cover'
        />
        <View> 
        <Text numberOfLines={1} className='font-pmedium text-base'>{props.name}</Text>
        <Text className='text-netral'>@{props.username}</Text>
        </View>
      </TouchableOpacity>
      
      {user.username !== props.username && (
        <FollowButton  
        width={104}
        height={48}
        isFollowing={props.isFollowing}
        username={props.username} 
        />
      )}

    </View>
  )
}

export default UserItem
