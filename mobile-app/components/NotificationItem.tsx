import { View, Text, Image } from 'react-native'
import { images } from '../constants'

type NotificationItemType = { 
  id: string
  unread?: boolean
  createdAt: string
}

const NotificationItem = ({notification, className}:{notification: NotificationItemType,className?: string}) => {

  const { 
    unread= false,
    createdAt
  } = notification 

  return (
      <View  
      className={`flex-row justify-between items-center space-x-1 px-2 py-[9px] rounded-xl mb-2
      ${unread && "bg-blue-50"} ${className}`} 
      >  
        <Image
        source={images.user}
        className='w-14 h-14 rounded-full mr-1'
        resizeMode='cover'  
        />
        <View className='flex-1 flex-row justify-between'> 
          <Text numberOfLines={2} className='flex-1 text-[15px] leading-[25px]'> 
            <Text className='font-psemibold'>John Daddy</Text>{" "}
            liked your image "beautiful night city".
          </Text>

          <View className='pt-[3px] h-full items-center'>
            <Text className='text-xs text-netral'>{createdAt}</Text>
            {unread && ( 
              <View className='w-[6px] h-[6px] bg-secondary rounded-full my-[10px]' />
            )}

          </View>
        </View>

      </View>
  )
}

export default NotificationItem
