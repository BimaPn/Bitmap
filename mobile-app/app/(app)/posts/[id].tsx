import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images, { imagesExample } from '../../../constants/images';
import DynamicImage from '../../../components/DynamicImage';
import FollowButton from '../../../components/FollowButton';
import { icons } from '../../../constants';
import PostsRecommendations from '../../../components/PostsRecommendations';
import BackButton from '../../../components/BackButton';
import { LinearGradient } from 'expo-linear-gradient';


const PostDetail = () => {

  const { id } = useLocalSearchParams();
  const [post, setpost] = useState<PostType | undefined>(imagesExample.find((post) => post.id === id as string))
  const [imageHeight, setimageHeight] = useState(300)
  const [scrolled, setscrolled] = useState(false)

  if(!post) return null

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = (event.nativeEvent.contentOffset.y) + 40;

    if(yOffset > imageHeight) {
      setscrolled(true)
    }else { 
      setscrolled(false)
    }
  };

  return (
    <SafeAreaView className='-mt-[2px] bg-white'> 
      <ScrollView 
      stickyHeaderIndices={[0]} 
      onScroll={handleScroll} 
      scrollEventThrottle={16}
      >

        <View className='relative border border-gray-300/0'>
          <View className='absolute top-0 left-0 right-0 flex-row items-center py-2'> 
            <View className={`w-11 aspect-square rounded-full mx-1 ${scrolled && "bg-white"}`}> 
              <BackButton containerStyles='!p-4' tintColor={scrolled ? "black" : "white"} />
            </View>
          </View>
        </View>

        <View className='relative'>

          <View className='w-full flex-row justify-end items-center absolute top-0 z-[5] py-5'>
            <View className='pr-4'>
              <Image 
              source={icons.more_dark} 
              className='w-5 h-5' 
              tintColor={"white"}  
              resizeMode='contain' />
            </View>
          </View>

          <LinearGradient
          colors={['rgba(0,0,0,0.40)', 'transparent']}
          className='absolute top-0 left-0 right-0 h-16 z-[4]'
          />

          <DynamicImage 
          uri={post.image} 
          getHeight={(height) => setimageHeight(height)}
          className='!rounded-none' 
          />
        </View>

        <PostDescription />

        <View className='mt-2'>
          <View className='mx-3 mb-3 border-t border-gray-300 pt-4'>
            <Text className='font-pmedium text-base'>More to explore</Text>
          </View>
          <View className='px-2'>
            <PostsRecommendations />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const PostDescription = () => {
  return (
    <View className='p-3 pt-4'> 

      <View className='flex-row justify-between items-center'> 
        <UserInfo /> 
        <PostActions />
      </View>

      <View className='space-y-[7px] mt-5'> 
        <Text className='font-pmedium text-lg leading-[24px]'>Stupid eagle killed my fucking grandpa</Text>
        <Text className='leading-6'> 
        When it tried to kill my grandpa, i shooted a photo of the eagle before I continue to watch the bird that trying to kill my grandpa. 
        </Text>
      </View>
    </View>
  )
}

const UserInfo = () => {
  return ( 
    <View className='flex-row items-center gap-2'> 
      <Image source={images.user} className='w-12 h-12 rounded-full' resizeMode='cover' />
      <View> 
        <Text className='font-medium text-base'>Jackie Chan</Text>
        <Text className='text-xs'>98k Followers</Text>
      </View>
    </View>
  )
}

const PostActions = () => {
  return (
    <View className='flex-row items-center gap-[19px]'>
      <TouchableOpacity> 
        <Image source={icons.download} className='w-[22px] h-[22px]' resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity> 
        <Image source={icons.like} className='w-[25px] h-[25px] ml-[2px] -mb-[1px]' resizeMode='contain' />
      </TouchableOpacity>
      <TouchableOpacity> 
        <Image source={icons.bookmark} className='w-[23px] h-[23px]' resizeMode='contain' />
      </TouchableOpacity>
    </View>
  )
}


export default PostDetail
