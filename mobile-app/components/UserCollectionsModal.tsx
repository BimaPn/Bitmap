import { View, Text, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ApiClient from '../api/axios/ApiClient';
import LoadingSpinner from './LoadingSpinner';
import NoResult from './NoResult';
import { images } from '../constants';
import { useDetailPost } from './providers/DetailPostProvider';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserCollectionsModal = ({ postId }:{ postId: string }) => {
  const { user } = useSelector((state : any) => state.auth);

  const [collections, setcollections] = useState<CollectionItemProps[] | null>(null)

  useEffect(() => {
      const getUserCollections = async () => {
        ApiClient().get(`/api/users/${user.username}/collections`)
        .then((res) => {
          const result = res.data.collections
          setcollections(result)
        })
        .catch((err) => {
          console.log(err.response)
        })
      }
      getUserCollections()
    },[])


  if(!collections) {
    return <LoadingSpinner />
  }

  if(collections && collections.length < 1) {
    return <NoResult />
  }

  const addPost = async (collectionId: string) => {
    const url = `/api/collections/${collectionId}/posts/${postId}/add`
    console.log(url)
    ApiClient().post(url)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)  
    })
  }

  return collections && (
    <View className='gap-1 px-2'>
       {collections.map((item, i) => (
          <TouchableOpacity
          key={i} 
          onPress={() => addPost(item.id)}
          className='flex-row gap-[10px] items-center'
          >
            <View className='w-12 h-12'>
              <Image
              source={item.posts[0].media ? { uri: item.posts[0].media } : images.user}
              className='w-full h-full rounded-lg'
              resizeMode='cover' 
              />
            </View>
            <Text className='font-pmedium text-lg'>{item.name}</Text>
          </TouchableOpacity>
       ))}
    </View>
  )
}

export default UserCollectionsModal
