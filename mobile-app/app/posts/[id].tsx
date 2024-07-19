import { useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, Animated, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images, { imagesExample } from '../../constants/images';
import DynamicImage from '../../components/DynamicImage';
import FollowButton from '../../components/FollowButton';

const { width, height } = Dimensions.get("screen")

const PostDetail = () => {
  const { id } = useLocalSearchParams();
  const [post, setpost] = useState<PostType | undefined>(imagesExample.find((post) => post.id === id as string))

  const [position, setposition] = useState<any>(null)
  
  const scrollY = useRef(new Animated.Value(0)).current

  const topEdge = position?.y - height + position?.height

  
  if(!post) return null

  return (
    <SafeAreaView className='relative'> 
      <Animated.ScrollView 
      onScroll={Animated.event( 
        [{nativeEvent: {contentOffset:{ y: scrollY }},}],
        { useNativeDriver: true }
      )}  
      > 
        <DynamicImage uri={post.image} className='!rounded-none' />
        <View className='p-3 pt-4'> 
          <UserInfo />
          <View className='space-y-[7px] mt-4'> 
            <Text className='font-pmedium text-lg leading-[24px]'>Stupid eagle killed my fucking grandpa</Text>
            <Text className='leading-5'> 
            When it tried to kill my grandpa, i shooted a photo of the eagle before I continue to watch the bird that trying to kill my grandpa. 
            </Text>
          </View>
        </View>

        <View className='flex-1 w-full h-[200px] border' />

        <View className='py-4 border' onLayout={(e) => setposition(e.nativeEvent.layout)}>
        <Text>fuck</Text>
        </View>
        <View className='flex-1 w-full h-[500px] border' />
      </Animated.ScrollView>

      {position && ( 
        <Animated.View 
        style={{ 
          transform: [{ 
            translateY: scrollY.interpolate({ 
              inputRange: [-1,0,  topEdge - 1, topEdge, topEdge + 1],
              outputRange: [0,0,0,0,-1]
            })
          }] 
        }}
        className='py-4 absolute bottom-0 left-0 right-0 border'>
        <Text>fuck</Text>
        </Animated.View>
      )}
        
    </SafeAreaView>
  )
}

const UserInfo = () => {
  return ( 
    <View className='flex-row justify-between items-center'> 
      <View className='flex-row items-center gap-2'> 
        <Image source={images.user} className='w-12 h-12 rounded-full' resizeMode='cover' />
        <View> 
          <Text className='font-medium text-base'>Jackie Chan</Text>
          <Text className='text-xs'>98k Followers</Text>
        </View>
      </View>
      <FollowButton /> 
    </View>
  )
}

export default PostDetail
