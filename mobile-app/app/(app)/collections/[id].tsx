import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackHeader from '../../../components/BackHeader'
import BackButton from '../../../components/BackButton'
import { icons, images } from '../../../constants'
import { Link } from 'expo-router'
import CollectionPosts from '../../../components/CollectionPosts'
import ShareButton from '../../../components/collections/ShareButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CollectionDetail = () => {
  return (
   <SafeAreaView className='h-full bg-white'> 
      <ScrollView stickyHeaderIndices={[0]}> 
        <Topbar />

        <View className='px-4 mt-2'>

          <View className='gap-[10px]'>
            <Text className='text-xl font-pmedium'>Ini Judulnya</Text>
            <Text className='text-gray-900 leading-[22px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro est eligendi ipsa quibusdam modi?</Text>
          </View>

          <View className='flex-row justify-between items-center mt-5'>
            <View className='flex-row items-center gap-[6px]'>
              <Image 
              source={images.user}
              className='w-8 h-8 rounded-full'
              resizeMode='contain'
              />
              <View className='flex-row gap-1'>
                <Text className='text-gray-600'>By</Text>
                <Link href={`/users/dadang07`} className='font-pmedium'>Emily Johnson</Link>
              </View>
            </View>
            <Text className='text-gray-600'>12 Posts</Text>
          </View>

        </View>

        <CollectionPosts />

      </ScrollView>
   </SafeAreaView>
  )
}

const Topbar = () => {
  return (
    <View className='flex-row justify-between items-center py-4 bg-white px-1'> 
      <View className='basis-1/3 flex-row justify-start'> 
        <BackButton />
      </View>
      <View className='basis-1/3'/> 
      <View className='basis-1/3 flex-row justify-end pr-3'> 
        <View className='mr-4'>
          <ShareButton /> 
        </View>

        <More />
      </View>
    </View>
  )
}

const More = () => {
  return (
    <TouchableOpacity
    activeOpacity={.8}
    >
    <Image 
    source={icons.more_dark}
    className='w-5 h-5'
    resizeMode='contain'
    />
    </TouchableOpacity>
  )
}

export default CollectionDetail
