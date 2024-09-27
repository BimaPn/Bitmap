import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CollectionItem = ({ className, ...props }: CollectionItemProps & { className?: string }) => {
  const {
    id,
    name,
    posts_count,
    posts
  } = props

  const gridContent = (index: number) => {
    const post = posts[index]
    if(post) {
      return (
        <Image
        source={{ uri: post.media }}
        className={`w-full ${index > 0 ? "h-1/2": "h-full"} bg-gray-200`}
        resizeMode='cover'
        />
      )
    }
    return <View className={`w-full ${index > 0 ? "h-1/2": "h-full"} bg-gray-200`} />
  }

  return (
    <TouchableOpacity 
    activeOpacity={.8} 
    className={`w-full ${className}`}
    >
      <View className='flex-1 flex-row justify-between items-center aspect-[16/10] rounded-2xl overflow-hidden space-x-[6px]'>
        <View className='w-1/2 h-full relative' >
          {gridContent(0)}
        </View>
        <View className='w-1/2 h-full space-y-[6px]'>
          {gridContent(1)}
          {gridContent(2)}
        </View> 
      </View>

      <View className='mt-2'>
        <Text className='font-pmedium text-base'>{name}</Text>
        <Text className='text-netral text-[13px]'>{posts_count} Posts</Text>
      </View>

    </TouchableOpacity>
  )
}

export default CollectionItem

    // <View className='w-full mr-4'>
    //   <View className='flex-1 flex-row justify-between items-center aspect-[16/10] rounded-2xl overflow-hidden space-x-[6px]'>
    //     <View className='w-1/2 h-full' >
    //       <Image source={{ uri: categories[0].image }} className='w-full h-full' resizeMode='cover' />
    //     </View>
    //     <View className='w-1/2 h-full space-y-[6px]'>
    //       <Image source={{ uri: categories[1].image }} className='w-full h-1/2' resizeMode='cover' />
    //       <Image source={{ uri: categories[2].image }} className='w-full h-1/2' resizeMode='cover' />
    //     </View> 
    //   </View>
    //
    //   <View className='mt-2'>
    //     <Text className='font-pmedium text-base'>Beauty of Nature</Text>
    //     <Text className='text-netral text-[13px]'>55 Photos</Text>
    //   </View>
    //
    // </View>
